﻿namespace Api.Web.Controllers
{
    using Api.Models.CarouselItem;
    using Api.Models.HomeContent;
    using Api.Services.Interfaces;
    using Api.Web.Infrastructure.Constants;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    [Produces("application/json")]
    [Route("api/[controller]")]
    public class HomeContentController : BaseController
    {
        private readonly IHomeContentService homeContent;

        public HomeContentController(IUserService users, IHomeContentService homeContent, ISettingsService settings) : base(users, settings)
        {
            this.homeContent = homeContent;
        }

        [HttpGet]
        [Route("articles")]
        public async Task<IActionResult> GetArticle()
        {
            try
            {
                HomeContentModel content = await this.homeContent.GetArticle();

                return this.Ok(new { content = content });
            }
            catch (Exception e)
            {
                return this.StatusCode(StatusCodes.Status400BadRequest, e.Message);
            }
        }


        [HttpPost]
        [Route("articles")]
        public async Task<IActionResult> Modify([FromBody]HomeContentCreateEditModel content)
        {
            return await this.Execute(true, true, async () =>
            {
                await this.homeContent.ModifyArticle(content);

                return this.Ok("Content has been modified");
            });
        }

        [Authorize]
        [HttpPost]
        [Route("carousel/items")]
        public async Task<IActionResult> CreateItem([FromBody]CarouselItemCreateEditModel item)
        {
            return await this.Execute(true, true, async () =>
            {
                string carouselItemId = await this.homeContent.CreateCarouselItem(item);

                return this.Ok(new { carouselItemId = carouselItemId });
            });
        }

        [Authorize]
        [HttpPut]
        [Route("carousel/items/{id}")]
        public async Task<IActionResult> EditItem(string id, [FromBody]CarouselItemCreateEditModel item)
        {
            return await this.Execute(true, true, async () =>
            {
                await this.homeContent.EditCarouselItem(id, item);

                return this.Ok(new { carouselItemId = id });
            });
        }

        [Authorize]
        [HttpDelete]
        [Route("carousel/items/{id}")]
        public async Task<IActionResult> DeleteItem(string id)
        {
            return await this.Execute(true, false, async () =>
            {
                await this.homeContent.DeleteCarouselItem(id);

                return this.Ok(Messages.CarouselItemDeletionConfirmation);
            });
        }

        [HttpGet]
        [Route("carousel/items/{id}")]
        public async Task<IActionResult> GetItem(string id)
        {
            return await this.Execute(false, false, async () =>
            {
                CarouselItemDetailsModel item = await this.homeContent.GetCarouselItem(id);

                return this.Ok(new { carouselItem = item });
            });
        }

        [HttpGet]
        [Route("carousel/items")]
        public async Task<IActionResult> GetAllItems()
        {
            return await this.Execute(false, false, async () =>
            {
                IEnumerable<CarouselItemDetailsModel> items = await this.homeContent.GetAllCarouselItems();

                return this.Ok(new { carouselItems = items });
            });
        }
    }
}