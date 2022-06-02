using DevCard.MVC.Models;
using Microsoft.AspNetCore.Mvc;

namespace DevCard.MVC.ViewComponents
{
    public class LatestArticlesViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            var articles = new List<Article>
            {
                new Article(1, "آموزش Asp.net core mvc",
                    "پکیج آموزشی برنامه نویسی Asp.net core mvc به زبان فارسی", "blog-post-thumb-card-1.jpg"),
                new Article(2, "آموزش Git & Github",
                    "پکیج آموزشی برنامه نویسی Git & Github به زبان فارسی", "blog-post-thumb-card-2.jpg"),
                new Article(3, "آموزش Onion Architecture",
                    "پکیج آموزشی برنامه نویسی Onion Architecture به زبان فارسی", "blog-post-thumb-card-3.jpg"),
                new Article(4, "آموزش طراحی سایت",
                    "پکیج آموزشی برنامه نویسی طراحی سایت به زبان فارسی", "blog-post-thumb-card-4.jpg"),

            };
            return View("_LatestArticles", articles);
        }
    }
}
