using System;

namespace ManagerAgent
{
    class Program
    {
        static void Main(string[] args)
        {
            Manager m1 = new Manager();
            Message m1message = new Message { 
                Address ="abc",
                Content= "this is awesome message"
            };
            Manager.sendMessageDelegate md = Types.SendByCar;
            m1.RequestDelivery(m1message, md);
            Agent a = new Agent();

            a.notificationChanged += new Agent.NotificationHandler(showNotification);
        }

        public static void showNotification(object theClock,NotificationEventArgs e) {
            Console.WriteLine(e.status);
        }
    }
}
