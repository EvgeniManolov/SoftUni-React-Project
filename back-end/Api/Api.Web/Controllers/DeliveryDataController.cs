namespace Api.Web.Controllers
{
    using System;
    using Api.Models.DeliveryData;
    using Api.Services.Interfaces;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Http;

    [Produces("application/json")]
    [Route("api/[controller]")]
    public class DeliveryDataController : BaseController
    {
        private readonly IDeliveryDataService deliveryData;

        public DeliveryDataController(IDeliveryDataService deliveryData, IUserService users, ISettingsService settings) : base(users, settings)
        {
            this.deliveryData = deliveryData;
        }

        //get api/deliverydata/id
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            return await this.Execute(false, false, async () =>
            {
                DeliveryDataDetailsModel data = await this.deliveryData.Get(id);

                return this.Ok(new { deliveryData = data });
            }); 
        }

        //post api/deliverydata
        [HttpPost]
        public async Task<IActionResult> CreateDeliveryData([FromBody]DeliveryDataCreateModel data)
        {
            return await this.Execute(false, true, async () =>
            {
                string deliveryDataId = await this.deliveryData
                    .Create(
                    data);

                return this.Ok(new { deliveryDataId = deliveryDataId });
            });
        }

        //put api/deliverydata/id
        [HttpPut]
        [Route("{id}")]
        [Authorize]
        public async Task<IActionResult> Edit(string id, [FromBody]DeliveryDataCreateModel data)
        {
            return await this.Execute(true, true, async () =>
            {
                await this.deliveryData.Edit(id, data);

                return this.Ok(new { deliveryDataId = id });
            });
        }
    }
}