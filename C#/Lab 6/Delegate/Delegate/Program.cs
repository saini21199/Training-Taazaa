using System;

namespace Delegate
{
    class Program
    {
        delegate void Del(string str);
        static void Main(string[] args)
        {
            Del d = new Del(Notify);
            d("sachin");
        }

        

        static void foo(int a) {
            Console.WriteLine(a);
        }

        static void Notify(string x)
        {
            Console.WriteLine(x);
        }

    }
}
