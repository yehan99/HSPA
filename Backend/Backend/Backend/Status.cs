﻿using System.ComponentModel.DataAnnotations;

namespace Backend
{
    public class Status
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string StatusOption { get; set; } = string.Empty;
    }
}
