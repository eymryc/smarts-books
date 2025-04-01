<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebSiteController;
use App\Http\Controllers\BooksRequestController;

// Route::get('/', function () {
//     return Inertia::render('welcome',);
// })->name('home');

// Route::get('/', function () {
//     return Inertia::render('dashboard');
// })->name('dashboard');

Route::get('/', [BooksRequestController::class, 'create'])->name('home');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});


//
Route::post('books-requests', [BooksRequestController::class, 'store'])->name('books-requests');
Route::get('books-requests', [BooksRequestController::class, 'getBooksRequest']);


//
Route::get('/about', [WebSiteController::class, 'about'])->name('about.create');
Route::get('/contact', [WebSiteController::class, 'contact'])->name('contact.create');
Route::get('/books', [WebSiteController::class, 'book'])->name('books.create');



require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
