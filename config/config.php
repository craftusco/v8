<?php

return [
    'database' => [
        'type' => 'mysql',
        'host' => 'localhost',
        'port' => 3306,
        'name' => 'v8',
        'username' => 'root',
        'password' => 'root',
        'engine' => 'InnoDB',
        'charset' => 'utf8mb4',
        // Remove 'host' above when using sockets
        'socket' => '',
    ],

    'cookie' => [
        'same_site' => 'Lax',
        'secure' => false
    ],

    'cors' => [
        'enabled' => true,
        'origin' => array (
  0 => '*',
),
        'methods' => array (
  0 => 'GET',
  1 => 'POST',
  2 => 'PUT',
  3 => 'PATCH',
  4 => 'DELETE',
  5 => 'HEAD',
),
        'headers' => array (
),
        'exposed_headers' => array (
),
        'max_age' => 600,
        'credentials' => true,
    ],

    'rate_limit' => [
        'enabled' => false,
        'limit' => 100,
        'interval' => 60,
        'adapter' => 'redis',
        'host' => '127.0.0.1',
        'port' => 6379,
        'timeout' => 10,
    ],

    'storage' => [
        'adapter' => 'local',
        'root' => 'public/uploads/my-project/originals',
        'root_url' => '/uploads/my-project/originals',
        'thumb_root' => 'public/uploads/my-project/generated',
        // 'key' => '',
        // 'secret' => '',
        // 'region' => '',
        // 'version' => '',
        // 'bucket' => '',
        // 'options' => '',
        // 'endpoint' => '',
        // 'proxy_downloads' => '',
    ],

    'mail' => [
        'default' => [
            'transport' => 'sendmail',
            // 'sendmail' => '',
            // 'host' => '',
            // 'port' => '',
            // 'username' => '',
            // 'password' => '',
            // 'encryption' => '',
            'from' => 'admin@example.com'
        ],
    ],

    'cache' => [
        'enabled' => false,
        'response_ttl' => 3600,
        'pool' => [
            // 'adapter' => '',
            // 'path' => '',
            // 'host' => '',
            // 'port' => '',
        ],
    ],

    'auth' => [
        'secret_key' => 'N7N4yYVlzLxmnUMR3xFOYE9hh8Ay2AoV',
        'public_key' => '4552f156-d1ca-4447-8bd7-01c501915333',
        'ttl' => 20,
        'social_providers' => [
            // 'okta' => '',
            // 'github' => '',
            // 'facebook' => '',
            // 'google' => '',
            // 'twitter' => '',
        ],
    ],

    'hooks' => [
        'actions' => [],
        'filters' => [],
    ],

    'tableBlacklist' => [],

    'env' => 'production',

    'logger' => [
        'path' => '/Applications/MAMP/htdocs/v8/src/core/Directus/Util/Installation/../../../../../logs',
    ],
];
