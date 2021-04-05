using CalculatorLib;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExtensionCalculator
{
    public static class Extension
    {
        public static int subtract(this Calculator c) {

            return c.num1 - c.num2;
        }
    }
}
