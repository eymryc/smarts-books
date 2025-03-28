<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books_requests', function (Blueprint $table) {
            $table->id();
            $table->string('first_name')->nullable(); // prénom
            $table->string('last_name')->nullable(); // Nom
            $table->string('affiliation')->nullable(); // Affiliation ou institution
            $table->string('country')->nullable(); // Pays
            $table->string('city')->nullable(); // Ville
            $table->string('phone')->nullable(); // Téléphone
            $table->string('email')->nullable(); // E-mail
            $table->string('book_title')->nullable(); // Intitulé de l'ouvrage
            $table->string('publisher')->nullable(); // Maison d'édition
            $table->string('edition_number')->nullable(); // Numéro d'édition
            $table->string('book_link')->nullable(); // Lien de l'ouvrage (peut être nul)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books_requests');
    }
};
