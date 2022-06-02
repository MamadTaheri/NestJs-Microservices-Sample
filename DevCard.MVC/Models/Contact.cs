using System.ComponentModel.DataAnnotations;

namespace DevCard.MVC.Models
{
    public class Contact
    {
        [Required(ErrorMessage = "این فیلد اجباری است")]
        [MinLength(3, ErrorMessage = "حداقل طول ما 3 کاراکتر است")]
        [MaxLength(100, ErrorMessage = "حداکثر طول ما 100 کاراکتر است")]
        public string Name { get; set; }

        [Required(ErrorMessage = "این فیلد اجباری است")]
        [EmailAddress(ErrorMessage = "مقدار وارد شده برای ایمیل صحیح نیست")]
        public string Email { get; set; }

        [Required(ErrorMessage = "این فیلد اجباری است")]
        public string Message { get; set; }

        [Required(ErrorMessage = "این فیلد اجباری است")]
        public string Service { get; set; }
    }
}
