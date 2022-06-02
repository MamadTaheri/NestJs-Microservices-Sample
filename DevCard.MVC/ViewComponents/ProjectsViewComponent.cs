using DevCard.MVC.Models;
using Microsoft.AspNetCore.Mvc;

namespace DevCard.MVC.ViewComponents
{
    public class ProjectsViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            var projects = new List<Project>
            {
                new Project(1,"تاکسی", "درخواست آنلاین تاکسی برای سفرهای درون شهری", "project-1.jpg", "Snapp"),
                new Project(2, "زودفود", "درخواست آنلاین غذا", "project-2.jpg", "Snapp food"),
                new Project(3, "مدارس", "سیستم مدیریت یکپارچه مدارس", "project-3.jpg", "Schoole"),
                new Project(4, "فضاپیما", "برنامه مدیریت فضاپیما های ناسا", "project-4.jpg", "NASA"),
            };
            return View("_Projects", projects);
        }
    }
}
