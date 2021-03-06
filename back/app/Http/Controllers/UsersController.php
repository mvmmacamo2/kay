<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    // FUNCOES DE API

    // Buscar Todos os Usuarios
    public function getUsuarios()
    {
        $usuarios = User::all();
        if (!$usuarios) {
            return response()->json(['mensagem'=>'Nenhum usuario Disponivel'], 404);
        }else{

        }
        return response()->json(['usuarios' => $usuarios, 'status'=> 200]);

    }



// buscar Usuario

    public function getUsuario($id){

        $usuario = User::find($id);
        if(!$usuario)
            return response()->json(['mensagem' => 'Usuario não encontrado'], 404);
        else
            return response()->json(['usuario' => $usuario]);
    }


  // MANDAR USUARIO
    public function salvarUsuario(Request $request)
    {

        $usuario = User::create($request->all());

        return response()->json(['usuario' => $usuario], 201);
    }




    public function updateUsuario(Request $request, $id)
    {

        $usuario = User::find($id);
        if(!$usuario)
            return response()->json(['mensagem' => 'Usuário nao  encontrado'], 404);

        $usuario->update($request->all());

        return response(['trabalho', $usuario]);
    }



    public function deleteUsuario($id){
        $usuario = User::find($id);
        if(!$usuario)
            return response()->json(['mensagem' => 'Usuário não  encontrado'], 404);
        $usuario->delete();
        return response()->json(['mensagem', 'User Removido  com sucesso'], 200);
    }




}
