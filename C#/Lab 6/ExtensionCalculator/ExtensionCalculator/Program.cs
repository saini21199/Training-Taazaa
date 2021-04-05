using System;
using CalculatorLib;
namespace ExtensionCalculator
{
    class Program
    {
        static void Main(string[] args)
        {

            Calculator c = new Calculator
            {
                num1 = 10,
                num2 = 5
            };

            Console.WriteLine(
            c.subtract());
        }
    }
}
