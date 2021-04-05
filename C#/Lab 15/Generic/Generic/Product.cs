using System;
using System.Collections.Generic;
using System.Text;

namespace Generic
{
    public class Product 
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public int Price { get; set; }

        public override string ToString()
        {
            string s;
            s = "Products details are : " + Id + " " + Title + " " + Price;
            return s; 
            
        }
    }
}
