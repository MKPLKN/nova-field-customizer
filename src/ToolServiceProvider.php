<?php

namespace Bhnow\NovaFieldCustomizer;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Bhnow\NovaFieldCustomizer\Http\Middleware\Authorize;
use Laravel\Nova\Fields\Field;

class ToolServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $macros = [
            'formRowClasses',
            'wrapperClasses',
            'wrapperLabelClasses',
            'wrapperFieldClasses',
            'labelClasses',
            'fieldClasses',
            'stack',
            'half',
            'third',
            'forth',
            'fifth',
            'clear',
        ];

        Nova::serving(function (ServingNova $event) use ($macros) {
            foreach ($macros as $macro) {
                Field::macro($macro, function ($classes = '', $clear = false) use ($macro) {
                    $this->meta[$macro] = ['classes' => $classes, 'clear' => $clear];
                    return $this;
                });
            }

            Field::macro('clear', function () {
                $this->meta['clear'] = true;
                return $this;
            });

            Nova::script('nova-field-customizer', __DIR__ . '/../dist/js/tool.js');
        });
    }

    /**
     * Register the tool's routes.
     *
     * @return void
     */
    protected function routes()
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova', Authorize::class])
                ->prefix('nova-vendor/nova-field-customizer')
                ->group(__DIR__ . '/../routes/api.php');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
