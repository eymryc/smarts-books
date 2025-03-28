<?php

namespace App\Http\Controllers;

use App\Models\BooksRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;

class BooksRequestController extends Controller
{   


    public function create(Request $request): Response
    {
        return Inertia::render('welcome', [
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {   
        // Règles de validation
        $rules = [
            'first_name'        => 'required|string|max:255',
            'last_name'         => 'required|string|max:255',
            'affiliation'       => 'nullable|string|max:255',
            'country'           => 'required|string|max:255',
            'city'              => 'required|string|max:255',
            'phone'             => 'required|regex:/^\+?[0-9]{1,4}?[-. ]?(\(?\d{1,3}?\)?[-. ]?)?[\d\s.-]{3,}$/',
            'email'             => 'nullable|email|max:255',
            'book_title'        => 'nullable|string|max:255',
            'publisher'         => 'nullable|string|max:255',
            'edition_number'    => 'nullable|string|max:255',
            'book_link'         => 'nullable|url|max:255',
        ];

        // Créer le validateur
        $validator = Validator::make($request->all(), $rules);

        // Si la validation échoue, retourner les erreurs
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Les données envoyées sont invalides.',
                'errors' => $validator->errors()
            ], 422);
        }

        // Si la validation réussit, créer un nouvel enregistrement dans la base de données
        BooksRequest::create($validator->validated());

        // response
        return back()->with('status', __('Votre commande a bien été prise en compte. Notre équipe vous contactera après votre commande pour vous fournir les modalités de paiement.'));
    }

}
