using System;

namespace Linqexpression
{
    class Program
    {
        static void Main(string[] args)
        {
            Func<int, int> square = (x) => { return x * x; };
            System.Linq.Expressions.Expression<Func<int, int>> e = x => x * x;
            var a = e.Compile();
            Console.WriteLine(a(7));
        }
    }
}
