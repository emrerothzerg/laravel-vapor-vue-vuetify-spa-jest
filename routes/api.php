<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/login', function (Request $request) {
    //make login query here
});
Route::get('/register', function (Request $request) {
    //make register query here
});
Route::get('/forgotpassword', function (Request $request) {
    //make forgotpassword query here
});


Route::prefix('admin')->group(function () {
    Route::get('/emre', function () {
        return 'emre laravel admin says hi';
    });
});


Route::prefix('employer')->group(function () {
    Route::get('/emre', function () {
        return 'emre laravel employer says hi';
    });
});


Route::prefix('www')->group(function () {
    Route::get('/emre', function () {
        return 'emre laravel www says hi';
    });
});
