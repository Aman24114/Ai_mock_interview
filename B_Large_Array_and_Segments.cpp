#include<bits/stdc++.h>
using namespace std;
#define ll long long 
void f()
{
    ll n,k,x;
    cin >> n >>k >>x;
    vector<ll>a(n);
    for(int i=0;i<n;i++)
    {
        cin >> a[i];
    }
    vector<ll>pre(n+1,0);
    for(int i=0;i<=n;i++)
    {
        pre[i]=pre[i-1]+a[i-1];
    }
    

}
int main()
{
    int t;
    cin >> t;
    while(t--)
    {
       f();
    }
    return 0;
}