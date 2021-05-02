<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\NamePlay;

class NamePlayTest extends TestCase
{
    public function testNamePlayContents()
    {
        $nameplay = new NamePlay('Emre');
        $this->assertEquals('emre', $nameplay->lowercase());
        $this->assertEquals('EMRE', $nameplay->uppercase());
    }
}
