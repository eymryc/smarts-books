<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WebSiteController extends Controller
{
    public function about(Request $request): Response
    {
        return Inertia::render('website/about', [
        ]);
    }

    public function contact(Request $request): Response
    {
        return Inertia::render('website/contact', [
        ]);
    }

    public function book(Request $request): Response
    {
        return Inertia::render('website/books', [
        ]);
    }
}
