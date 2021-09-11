//+------------------------------------------------------------------+
//|                                                       Slinky.mq4 |
//|                        Copyright 2021, MetaQuotes Software Corp. |
//|                                             https://www.mql5.com |
//+------------------------------------------------------------------+
#property copyright "Copyright 2021, Nidhal Nouma."
#property link      "https://nouma.nidhall.com/"
#property version   "1.00"
#property strict

extern string code=""; //Licence Key

extern double BF=500;

extern bool pps=true; //Progressive Position Sizing
extern double ppsp=10; //PPS % Lot Increase
extern int ppsm=0; //PPS Manual Lot Increase
extern int ppsmax=10; //PPS Maximum Sequential Losses

extern string Moving_Average_1_Settings="=========== Moving Average 1 Setting =============="; //======================
extern int pma=20; //Period
extern ENUM_MA_METHOD mma=0; //Methode 'MA'
extern ENUM_APPLIED_PRICE apma=2; //Applied Price
extern int sma=0; //Shift
extern string Moving_Average_2_Settings="=========== Moving Average 2 Setting =============="; //======================
extern int pma1=20; //Period
extern ENUM_MA_METHOD mma1=0; //Methode 'MA'
extern ENUM_APPLIED_PRICE apma1=3; //Applied Price
extern int sma1=0; //Shift


bool cop=true;
double point;
int magic=2022130;
datetime td=iTime(Symbol(),PERIOD_D1,0);

#include <HttpDll.mqh>
#include <json.mqh>

const string Hurl="127.0.0.1";
const string PathCustomer="/code/find";
Http http;
CJAVal json;

//+------------------------------------------------------------------+
//|                                                                  |
//+------------------------------------------------------------------+
bool checkLicence(bool isSecure=false)
  {
   string s="";
   string cookie=NULL,headers;
   char post[],result[];
   bool res;

   char   data[];
   string str=StringConcatenate("{","\"code\"",":","\"",code,"\"","}");

   int timeout=5000;

   ArrayResize(data,StringToCharArray(str,data,0,WHOLE_ARRAY,CP_UTF8)-1);

   res=http.send("POST",Hurl,PathCustomer,isSecure,str,"Content-Type: application/json\r\n",s);

   if(res==false)
     {
      return false;
     }
   else
     {
      //--- Load successfully
      Print("res =>>, ",s);
      json.Deserialize(s);

      string send=json["end"].ToStr();
      datetime end=StrToTime(send);

      Print("end on,", end);

      if(TimeCurrent()<end)
         return true;

     }
   return false;
  }
//+------------------------------------------------------------------+
//| Expert initialization function                                   |
//+------------------------------------------------------------------+
int OnInit()
  {
   if(!http.checkDll())
     {
      return INIT_FAILED;
     }
   if(!checkLicence())
     {
      string msg="Invalid Licence Key, Please Contact the owner.";
      MessageBox(msg,"Licence Key",0x00000010);
      return INIT_FAILED;
     }
//---
   if(Digits==5 || Digits==3)
     {
      point=Point*10;
     }
   else
     {
      point=Point;
     }
//---
   return(INIT_SUCCEEDED);
  }
//+------------------------------------------------------------------+
//| Expert deinitialization function                                 |
//+------------------------------------------------------------------+
void OnDeinit(const int reason)
  {
//---

  }
//+------------------------------------------------------------------+
//| Expert tick function                                             |
//+------------------------------------------------------------------+
void OnTick()
  {
   if(td!=iTime(Symbol(),PERIOD_D1,0))
     {
      if(!checkLicence())
        {
         string msg="Invalid Licence Key, Please Contact the owner.";
         MessageBox(msg,"Licence Key",0x00000010);
         return;
        }
      td=iTime(Symbol(),PERIOD_D1,0);
     }

   int oc=1;
   double ima1=iMA(Symbol(),0,pma,sma,mma,apma,oc);
   double ima2=iMA(Symbol(),0,pma1,sma1,mma1,apma1,oc);
   double imat=0;

   if(ima1<ima2)
     {
      imat=ima1;
      ima1=ima2;
      ima2=imat;
     }

   double o=Open[oc], c=Close[oc];
//---

   if(ima1!=0 && o<ima1 && c>=ima1 && nbuy()==0)
     {
      BUY();
     }
   if(ima2!=0 && o>ima2 && c<=ima2 && nsell()==0)
     {
      SELL();
     }

  }
//+------------------------------------------------------------------+
double GetLots()
  {
   double lots=0.1;
   double l=AccountBalance()/BF;
   l=l/100;
   lots=NormalizeDouble(l,2);

   if(pps)
     {
      double pl=pastLotLoss();
      double ppsmd=double(ppsm);
      //Print(pl, "  ", countLossSequence(),"   ",(ppsmd/100));
      if(pl>0)
        {
         if(countLossSequence()<ppsmax)
            lots=pl+(pl*ppsp/100)+(ppsmd/100);
         else
            lots=pl;
        }
     }

   double ml=MarketInfo(Symbol(),MODE_MAXLOT), minl=MarketInfo(Symbol(),MODE_MINLOT);
   if(lots>ml)
      lots=ml;
   else
      if(lots<minl)
         lots=minl;

   return(lots);
  }
//+------------------------------------------------------------------+
int nbuy()
  {
   int b=0;
   for(int i=0; i<OrdersTotal(); i++)
     {
      int a=OrderSelect(i,SELECT_BY_POS,MODE_TRADES);
      if(OrderType()==OP_BUY && OrderMagicNumber()==magic && OrderSymbol()==Symbol())
         b++;
     }
   return(b);
  }
//+------------------------------------------------------------------+
int nsell()
  {
   int s=0;
   for(int i=0; i<OrdersTotal(); i++)
     {
      int a=OrderSelect(i,SELECT_BY_POS,MODE_TRADES);
      if(OrderType()==OP_SELL && OrderMagicNumber()==magic && OrderSymbol()==Symbol())
         s++;
     }
   return(s);
  }
//+------------------------------------------------------------------+
void CloseSell()
  {
   for(int i=0; i<OrdersTotal(); i++)
     {
      int a=OrderSelect(i,SELECT_BY_POS,MODE_TRADES);
        {
         if(OrderType()==OP_SELL && OrderMagicNumber()==magic && OrderSymbol()==Symbol())
           {
            int u=OrderClose(OrderTicket(),OrderLots(),Ask,0,clrNONE);
           }
        }
     }
   if(nsell()>0)
      CloseSell();
  }
//+------------------------------------------------------------------+
void CloseBuy()
  {
   for(int i=0; i<OrdersTotal(); i++)
     {
      int a=OrderSelect(i,SELECT_BY_POS,MODE_TRADES);
        {
         if(OrderType()==OP_BUY && OrderMagicNumber()==magic && OrderSymbol()==Symbol())
           {
            int u=OrderClose(OrderTicket(),OrderLots(),Bid,0,clrNONE);
           }
        }
     }
   if(nbuy()>0)
      CloseBuy();
  }
//+------------------------------------------------------------------+
void SELL()
  {
   if(cop)
      CloseBuy();
   double ttp=0,ssl=0;
   int sell=OrderSend(Symbol(),OP_SELL,GetLots(),Bid,50,ssl,ttp,WindowExpertName(),magic,0,clrNONE);
   if(sell<0)
     {
      Print("sell failed with error #",GetLastError());
     }
   else
     {
      Print("sell placed successfully");
     }
  }
////////////////////////////////////////
void BUY()
  {
   if(cop)
      CloseSell();
   double ttp=0,ssl=0;
   int buy=OrderSend(Symbol(),OP_BUY,GetLots(),Ask,50,ssl,ttp,WindowExpertName(),magic,clrNONE);
   if(buy<0)
     {
      Print("buy failed with error #",GetLastError());
     }
   else
     {
      Print("buy placed successfully");
     }
  }
//+------------------------------------------------------------------+
double pastLotLoss()
  {
   for(int i=OrdersHistoryTotal(); i>=0; i--)
     {
      int a=OrderSelect(i,SELECT_BY_POS,MODE_HISTORY);
        {
         if(OrderMagicNumber()==magic && OrderSymbol()==Symbol())
           {
            if(OrderProfit()<0)
               return OrderLots();
            else
               return 0;
           }
        }
     }
   return 0;
  }
//+------------------------------------------------------------------+
int countLossSequence()
  {
   int r=0;
   for(int i=OrdersHistoryTotal(); i>=0; i--)
     {
      int a=OrderSelect(i,SELECT_BY_POS,MODE_HISTORY);
        {
         if(OrderMagicNumber()==magic && OrderSymbol()==Symbol())
           {
            if(OrderProfit()<0)
               r++;
            else
               return r;
           }
        }
     }
   return r;
  }
//+------------------------------------------------------------------+
