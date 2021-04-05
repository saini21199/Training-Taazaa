using System;
using System.Collections.Generic;
using System.Text;

namespace ExtensionMethod
{
    public static class ExtensionImplementation
    {
        public static int extension(this String s) {
            int count = 0;
            for (int i=0;i<s.Length;i++) {
                if(s[i]=='a' || s[i] == 'i' || s[i] == 'e' || s[i] == 'o' || s[i] == 'u')
                {
                    count++;
                }
            }
            return count;
        }
    }
}
