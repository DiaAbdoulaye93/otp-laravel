<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OtpController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});
Route::get('/', function () {
    return view('product_view');
});
Route::get("/accueil"   , function () {
    return view('product_view');
});
Route::get('/informations-personnels', function () {
    return view('infos_personnels');
});
Route::post('/validation-commande', [OtpController::class,'getconfirmationPage']);
Route::post('/validation-achat', [OtpController::class,'sendtOTP'])->name('requestForOtp');
Route::post('/test/otp-validate', [OtpController::class,'validateOtp'])->name('validateOtp');
Route::post('/test/otp-resend', [OtpController::class,'resendOtp'])->name('resendOtp');
Route::get('send-sms-notification', [OtpController::class, 'sendSmsNotificaition']);
// Route::post('/test/otp-request', 'OtpController@requestForOtp')->name('requestForOtp');
// Route::post('/test/otp-validate', 'OtpController@validateOtp')->name('validateOtp');
// Route::post('/test/otp-resend', 'OtpController@resendOtp')->name('resendOtp');
