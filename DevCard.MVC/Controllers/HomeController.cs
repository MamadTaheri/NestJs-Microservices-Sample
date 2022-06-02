using DevCard.MVC.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DevCard.MVC.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Contact()
        {
            var model = new Contact();
            return View(model);
        }

        [HttpPost]
        public IActionResult Contact(Contact model)
        {
            if(!ModelState.IsValid)
            {
                ViewBag.error = "اطلاعات وارد شده صحیح نیست لطفا دوباره تلاش کنید";
                return View(model);
            }
            
            ViewBag.success = "پیغام شما با موفقیت ارسال شد";
            return View();
        }

        public IActionResult Portfolio()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}