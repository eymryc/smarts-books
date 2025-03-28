<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BooksRequest extends Model
{
    // Les champs qui peuvent être remplis (mass-assignable)
    protected $fillable = [
        'first_name',
        'last_name',
        'affiliation',
        'country',
        'city',
        'phone',
        'email',
        'book_title',
        'publisher',
        'edition_number',
        'book_link',
    ];
}
