<?php

namespace App\Http\Controllers\Managment;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\BooksRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    //
    public function create(Request $request): Response
    {   
         // Récupérer les livres depuis la base de données
        $books = BooksRequest::all();

        return Inertia::render('managment/order', [
            // 'status' => $request->session()->get('status'),
            'books' => $books,
        ]);
    }


    /** Get data
     * @param mixed $status
     * @param string $searchValue
     * @param array $columnsFilter
     * 
     * @return array
     */
    // public function getBooksRequest(mixed $employeeId, mixed $status, string $searchValue, array $columnsFilter): array
    // {
    //     $query = BooksRequest::query();

    //     // Apply search filter if searchValue is provided
    //     if (!empty($searchValue)) {
    //         $query->where(function ($subQuery) use ($columnsFilter, $searchValue) {
    //             $subQuery->where($columnsFilter[0], 'LIKE', '%' . $searchValue . '%');
    //             for ($i = 1; $i < count($columnsFilter); $i++) {
    //                 $subQuery->orWhere($columnsFilter[$i], 'LIKE', '%' . $searchValue . '%');
    //             }
    //         });

    //         // Ajouter des conditions pour rechercher dans les modèles associés
    //         $query->orWhereHas('employee', function ($q) use ($searchValue) {
    //             $q->where('first_name', 'LIKE', '%' . $searchValue . '%');
    //         });
    //     }

    //     // Apply status filter if status is provided
    //     if (!empty($status)) {
    //         $query->where('status', $status);
    //     }

    //     $query->where('deleted_at', null);

    //     // Get the total number of filtered records (before pagination)
    //     $recordsTotal = $recordsFiltered = $query->count();

    //     // Appliquer la pagination et l'ordre
    //     $dataQuery = $query->offset($_REQUEST['start'])
    //         ->limit($_REQUEST['length'])
    //         ->orderBy('id', 'desc');

    //     // Récupérer les données paginées
    //     $data = $dataQuery->get();

    //     // return $response;
    //     return array(
    //         "recordsTotal"    => $recordsTotal,
    //         "recordsFiltered" => $recordsFiltered,
    //         "data"            => $data
    //     );
    // }
}
