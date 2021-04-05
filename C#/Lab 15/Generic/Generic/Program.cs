using System;

namespace Generic
{
    class Program
    {
        static void Main(string[] args)
        {
            Gen<int> obj = new Gen<int>();
            obj.Add(5);
            obj.Add(95); 
            obj.Add(14);
            obj.Add(78);
            obj.Add(100);
            Gen<Product> products = new Gen<Product>();

            products.Add(
                new Product
                {
                    Title = "Pencil",
                    Id = 1,
                    Price = 150
                });
            products.Add(new Product
            {
                Title = "Pen",
                Id = 2,
                Price = 20
            });
            products.Add(new Product
            {
                Title = "Bat",
                Id = 3,
                Price = 120
            });
            products.Add(new Product
            {
                Title = "Mobile",
                Id = 5,
                Price = 2000
            });
            products.Add(new Product
            {
                Title = "Stumps",
                Id = 4,
                Price = 200
            });

            for (int i=0;i<5;i++) {
                Console.WriteLine(obj[i]);
                Console.WriteLine(products[i].ToString());
            }
        }
    }
}
