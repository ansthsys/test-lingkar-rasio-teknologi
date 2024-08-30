<?php

namespace App\Http\Controllers;

use App\Models\Registrant;
use App\Http\Requests\StoreRegistrantRequest;
use App\Http\Requests\UpdateRegistrantRequest;
use Inertia\Inertia;

class RegistrantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Registrant/Index', [
            'registrants' => Registrant::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Registrant/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRegistrantRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Registrant $registrant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Registrant $registrant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRegistrantRequest $request, Registrant $registrant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Registrant $registrant)
    {
        //
    }
}
