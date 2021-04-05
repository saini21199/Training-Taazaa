using System;
using System.Linq;

namespace LinqStringAssignment
{
    class Program
    {
        static void Main(string[] args)
        {
            string s = "India has the second-largest population in the world. India is also knowns as Bharat, Hindustan and sometimes Aryavart." +
                " It is surrounded by oceans from three sides which are Bay Of Bengal in the east, the Arabian Sea in the west and Indian oceans in the south." +
                " Tiger is the national animal of India. Peacock is the national bird of India. Mango is the national fruit of India. “Jana Gana Mana” is the national anthem of India.";

            string input = Console.ReadLine();
           
         


             
                string[] result = s.Split(new char[] { '.', '?', '!', ' ', ';', ':', ',' }, StringSplitOptions.RemoveEmptyEntries);

                
                var matchQuery = from word in result
                                 where word.ToLowerInvariant() == input.ToLowerInvariant()
                                 select word;

          
                int count = matchQuery.Count();
                Console.WriteLine("{0} occurrences(s) of the search term \"{1}\" were found.", count, input);

              
            }
        }
        
    }

