<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);


    	DB::table('users')->insert([
    		'0' => [
    			'name' => 'Miguel Vasco Macamo',
    			'email' => 'misaelvasco@gmail.com',
    			'password' => '123456',
    			'estado' => 'on',
    		],
    		'1' => [
    			'name' => 'Leonardo Huo',
    			'email' => 'leo@gmail.com',
    			'password' => '123456',
    			'estado' => 'on',
    		],

    		'2' => [
    			'name' => 'Denilson Mavie',
    			'email' => 'denilson@gmail.com',
    			'password' => '123456',
    			'estado' => 'on',
    		]

    	]);
    }
}
