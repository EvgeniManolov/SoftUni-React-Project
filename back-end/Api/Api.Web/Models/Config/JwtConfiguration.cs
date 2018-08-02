﻿namespace Api.Web.Models.Config
{
    public class JwtConfiguration
    {
        public string Issuer { get; set; }

        public string Audience { get; set; }

        public string Key { get; set; }
    }
}
