using Xunit;

namespace DevCard.Test.xUnit
{
    public class SampleUnitTest1
    {
        [Fact]
        public void Should_Return_True()
        {
            // Arrange
            string x = "test";

            //Act
            bool result = (x == "test");

            //Assert 
            Assert.True(result);
        }

        [Fact]
        public void Should_Return_False()
        {
            // Arrange
            string x = "test";

            //Act
            bool result = (x == "testt");

            //Assert 
            Assert.False(result);
        }
    }
}