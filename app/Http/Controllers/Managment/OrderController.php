<?php

namespace App\Http\Controllers\Managment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OrderController extends Controller
{
    public function create(Request $request): Response
    {
        return Inertia::render('managment/order', [
            // 'status' => $request->session()->get('status'),
        ]);
    }
}
