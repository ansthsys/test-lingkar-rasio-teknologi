<?php

namespace App\Http\Controllers;

use App\Models\Registrant;
use App\Http\Requests\StoreRegistrantRequest;
use App\Http\Requests\UpdateRegistrantRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class RegistrantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $data = Registrant::query()
            ->with("user")
            ->when($request->has('search'), function ($query) use ($request) {
                $search = $request->input('search');
                $query->whereRaw('LOWER(nama) LIKE ?', ["%" . strtolower($search) . "%"]);
            })
            ->paginate(15);

        return Inertia::render('Registrant/Index', [
            'registrants' => $data,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Registrant/Form', [
            'pageMode' => 'create',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRegistrantRequest $request)
    {
        if ($request->file('ktp_url')) {
            $pathKtp = Storage::put('public', $request->file('ktp_url'));
            $publicPathKtp = Storage::url($pathKtp);
        }

        if ($request->file('kk_url')) {
            $pathKk = Storage::put('public', $request->file('kk_url'));
            $publicPathKk = Storage::url($pathKk);
        }

        Registrant::create([
            ...$request->all(),
            'user_id' => $request->user()->id,
            'ktp_url' => $publicPathKtp,
            'kk_url' => $publicPathKk,
        ]);

        return to_route("registrants.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Registrant $registrant)
    {
        return Inertia::render('Registrant/Form', [
            'pageMode' => 'show',
            'registrant' => $registrant,
        ]);
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
