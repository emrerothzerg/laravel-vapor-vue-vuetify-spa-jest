<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    public function index()
    {
        $data = [];
        $subdomain = explode('.', $_SERVER['HTTP_HOST'])[0];

        if ($subdomain === "laraveladmin") {
            $data['jsURL'] = "js/appAdmin.js";
        } elseif ($subdomain === "laravelemployer") {
            $data['jsURL'] = "js/appEmployer.js";
        } else {
            $data['jsURL'] = "js/appWWW.js";
        }


        return view('spa', $data);
    }
}
