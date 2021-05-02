<?php
# app/NamePlay.php

namespace App;

class NamePlay
{
    protected $name = '';

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function lowercase()
    {
        return strtolower($this->name);
    }

    public function uppercase()
    {
        return strtoupper($this->name);
    }
}
