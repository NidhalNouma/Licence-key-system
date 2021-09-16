//+------------------------------------------------------------------+
//|                                                      HttpDLL.mqh |
//|                        Copyright 2021, MetaQuotes Software Corp. |
//|                                             https://www.mql5.com |
//+------------------------------------------------------------------+
#property copyright "Copyright 2021, MetaQuotes Software Corp."
#property link      "https://www.mql5.com"
#property strict
//+------------------------------------------------------------------+
//| defines                                                          |
//+------------------------------------------------------------------+
#define FALSE 0

#define HINTERNET int
#define BOOL int
#define INTERNET_PORT int
#define LPINTERNET_BUFFERS int
#define DWORD int
#define DWORD_PTR int
#define LPDWORD int&
#define LPVOID uchar&
#define LPSTR string
#define LPCWSTR   string&
#define LPCTSTR string&
#define LPTSTR string&

#define OPEN_TYPE_PRECONFIG         0  // use default configuration
#define INTERNET_SERVICE_FTP        1  // Ftp service
#define INTERNET_SERVICE_HTTP       3  // Http service 
#define HTTP_QUERY_CONTENT_LENGTH   5

#define INTERNET_FLAG_PRAGMA_NOCACHE            0x00000100  // no caching of page
#define INTERNET_FLAG_KEEP_CONNECTION           0x00400000  // keep connection
#define INTERNET_FLAG_SECURE                    0x00800000
#define INTERNET_FLAG_RELOAD                    0x80000000  // get page from server when calling it
#define INTERNET_OPTION_SECURITY_FLAGS          31

#define ERROR_INTERNET_INVALID_CA               12045
#define INTERNET_FLAG_IGNORE_CERT_DATE_INVALID  0x00002000
#define INTERNET_FLAG_IGNORE_CERT_CN_INVALID    0x00001000
#define SECURITY_FLAG_IGNORE_CERT_CN_INVALID    INTERNET_FLAG_IGNORE_CERT_CN_INVALID
#define SECURITY_FLAG_IGNORE_CERT_DATE_INVALID  INTERNET_FLAG_IGNORE_CERT_DATE_INVALID
#define SECURITY_FLAG_IGNORE_UNKNOWN_CA         0x00000100
#define SECURITY_FLAG_IGNORE_WRONG_USAGE        0x00000200
//+------------------------------------------------------------------+
//| DLL imports                                                      |
//+------------------------------------------------------------------+
#import  "Kernel32.dll"
DWORD GetLastError(int);
#import

#import "wininet.dll"
DWORD InternetAttemptConnect(DWORD dwReserved);
HINTERNET InternetOpenW(LPCTSTR lpszAgent, DWORD dwAccessType, LPCTSTR lpszProxyName, LPCTSTR lpszProxyBypass, DWORD dwFlags);
HINTERNET InternetConnectW(HINTERNET hInternet, LPCTSTR lpszServerName, INTERNET_PORT nServerPort, LPCTSTR lpszUsername, LPCTSTR lpszPassword, DWORD dwService, DWORD dwFlags, DWORD_PTR dwContext);
HINTERNET HttpOpenRequestW(HINTERNET hConnect, LPCTSTR lpszVerb, LPCTSTR lpszObjectName, LPCTSTR lpszVersion, LPCTSTR lpszReferer, int /*LPCTSTR* */ lplpszAcceptTypes, uint/*DWORD*/ dwFlags, DWORD_PTR dwContext);
BOOL HttpSendRequestW(HINTERNET hRequest, LPCTSTR lpszHeaders, DWORD dwHeadersLength, LPVOID lpOptional[], DWORD dwOptionalLength);
BOOL HttpQueryInfoW(HINTERNET hRequest, DWORD dwInfoLevel, LPVOID lpvBuffer[], LPDWORD lpdwBufferLength, LPDWORD lpdwIndex);
HINTERNET InternetOpenUrlW(HINTERNET hInternet, LPCTSTR lpszUrl, LPCTSTR lpszHeaders, DWORD dwHeadersLength, uint/*DWORD*/ dwFlags, DWORD_PTR dwContext);
BOOL InternetReadFile(HINTERNET hFile, LPVOID lpBuffer[], DWORD dwNumberOfBytesToRead, LPDWORD lpdwNumberOfBytesRead);
BOOL InternetCloseHandle(HINTERNET hInternet);
BOOL InternetSetOptionW(HINTERNET hInternet, DWORD dwOption, LPDWORD lpBuffer, DWORD dwBufferLength);
BOOL InternetQueryOptionW(HINTERNET hInternet, DWORD dwOption, LPDWORD lpBuffer, LPDWORD lpdwBufferLength);
// BOOL InternetSetCookieW(LPCTSTR lpszUrl, LPCTSTR lpszCookieName, LPCTSTR lpszCookieData);
BOOL InternetGetCookieW(LPCTSTR lpszUrl, LPCTSTR lpszCookieName, LPVOID lpszCookieData[], LPDWORD lpdwSize);
#import
//+------------------------------------------------------------------+
//| EX5 imports                                                      |
//+------------------------------------------------------------------+
// #import "stdlib.ex5"
//   string ErrorDescription(int error_code);
// #import
//+------------------------------------------------------------------+

//+------------------------------------------------------------------+
//|                                                                  |
//+------------------------------------------------------------------+
class Http
  {
private:
   int               hSession;
   int               hConnect;

   bool              OpenC(string aHost, bool isSecure)
     {
      string aUser, aPass;
      int aService=INTERNET_SERVICE_HTTP;
      int aPort=isSecure? 443: 80;

      if(aHost=="")
        {
         Print("-Host not specified");
         return(false);
        }
      if(!MQLInfoInteger(MQL_DLLS_ALLOWED))
        {
         Print("-DLL not allowed");   // checking whether DLLs are allowed in the terminal
         return(false);
        }
      if(hSession>0 || hConnect>0)
         CloseC(); // close if a session was determined
      Print("+Open Inet..."); // print a message about the attempt of opening in the journal
      if(InternetAttemptConnect(0)!=0)
        {
         Print("-Err AttemptConnect");   // exit if the attempt to check the current Internet connection failed
         return(false);
        }
      string UserAgent="Mozilla";
      string nill="";
      hSession=InternetOpenW(UserAgent, OPEN_TYPE_PRECONFIG, nill, nill, 0); // open session
      if(hSession<=0)
        {
         Print("-Err create Session");   // exit if the attempt to open the session failed
         CloseC();
         return(false);
        }
      hConnect=InternetConnectW(hSession, aHost, aPort, aUser, aPass, aService, 0, 0);
      if(hConnect<=0)
        {
         Print("-Err create Connect");
         CloseC();
         return(false);
        }
      return(true); // otherwise all the checks are successfully finished
     }
   void              CloseC()
     {
      if(hSession>0)
        {
         InternetCloseHandle(hSession);
         hSession=-1;
         Print("-Close Session...");
        }
      if(hConnect>0)
        {
         InternetCloseHandle(hConnect);
         hConnect=-1;
         Print("-Close Connect...");
        }
     }

   bool              SendRequest(string type,string path,bool isSecure, string body, string header, string &response)
     {
      uchar data[];
      int hRequest, hSend=0;
      string Vers="HTTP/1.1";
      string nill="";

      StringToCharArray(body, data, 0, StringLen(body));

      uint options=isSecure? INTERNET_FLAG_KEEP_CONNECTION|INTERNET_FLAG_RELOAD|INTERNET_FLAG_PRAGMA_NOCACHE|INTERNET_FLAG_SECURE :INTERNET_FLAG_KEEP_CONNECTION|INTERNET_FLAG_RELOAD|INTERNET_FLAG_PRAGMA_NOCACHE;

      // creating descriptor of the request
      hRequest=HttpOpenRequestW(hConnect, type, path, Vers, nill, 0, options, 0);
      if(hRequest<=0)
        {
         Print("-Err OpenRequest");
         InternetCloseHandle(hConnect);
         return(false);
        }

      // sending the request
      int n=0;
      while(n<3)
        {
         n++;
         hSend=HttpSendRequestW(hRequest, header, StringLen(header), data, ArraySize(data)); // file is sent
         if(hSend<=0)
           {
            int err=0;
            err=GetLastError(err);
            Print("-Err SendRequest= ", err);
            if(err!=ERROR_INTERNET_INVALID_CA)
              {
               int dwFlags;
               int dwBuffLen = sizeof(dwFlags);
               InternetQueryOptionW(hRequest, INTERNET_OPTION_SECURITY_FLAGS, dwFlags, dwBuffLen);
               dwFlags |= SECURITY_FLAG_IGNORE_UNKNOWN_CA;
               int rez=InternetSetOptionW(hRequest, INTERNET_OPTION_SECURITY_FLAGS, dwFlags, sizeof(dwFlags));
               if(!rez)
                 {
                  Print("-Err InternetSetOptionW= ", GetLastError(err));
                  break;
                 }
              }
            else
               break;
           }
         else
            break;
        }
      if(hSend>0)
         ReadPage(hRequest, response); // read the page
      InternetCloseHandle(hRequest);
      InternetCloseHandle(hSend); // close all handles
      if(hSend<=0)
         CloseC();
      return(true);
     }

   void              ReadPage(int hRequest, string &Out)
     {
      if(!TerminalInfoInteger(TERMINAL_DLLS_ALLOWED))
        {
         Print("-DLL not allowed");   // checking whether DLLs are allowed in the terminal
         return;
        }
      if(!MQLInfoInteger(MQL_DLLS_ALLOWED))
        {
         Print("-DLL not allowed");   // checking whether DLLs are allowed in the terminal
         return;
        }
      // read the page
      uchar ch[100];
      string toStr="";
      int dwBytes, h=-1;
      while(InternetReadFile(hRequest, ch, 100, dwBytes))
        {
         if(dwBytes<=0)
            break;
         toStr=toStr+CharArrayToString(ch, 0, dwBytes);
        }
      Out=toStr;
     }

public:
   bool              send(string type, string host, string path, bool isSecure, string body, string header, string &response)
     {
      if(OpenC(host,isSecure))
        {
         if(SendRequest(type,path,isSecure,body, header, response))
            return true;
        }

      return false;
     }

   bool              checkDll()
     {
      if(!MQLInfoInteger(MQL_DLLS_ALLOWED) || !TerminalInfoInteger(TERMINAL_DLLS_ALLOWED))
        {
         string msg="Please Allow the DLL to continue using the EA.";
         MessageBox(msg,"DLL",0x00000010);
         return false;
        }
        return true;
     }
  };
//+------------------------------------------------------------------+
