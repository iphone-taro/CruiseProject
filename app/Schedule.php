<?php

namespace App;
use Illuminate\Support\Facades\DB;
use App\Consts\Consts;
use App\Models\Game;
use DateTime;

class Schedule {

    public function __invoke() {
        $fileName = "f" . date('Y-m-d-H-i-s');
        mkdir("./storage/app/public/" . $fileName);
    }
}
