<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('streams', function (Blueprint $table) {
            $table->string('game_id');
            $table->string('user_id');
            $table->string('user_name');
            $table->string('title');
            $table->string('icon');
            $table->integer('view_count');
            $table->integer('disp_minute');
            $table->unique('game_id', 'disp_minute');
            $table->timestamp('updated_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::dropIfExists('users');
    }
};
