<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitb315ab9a493776eab3e8ddcbd092711d
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitb315ab9a493776eab3e8ddcbd092711d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitb315ab9a493776eab3e8ddcbd092711d::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitb315ab9a493776eab3e8ddcbd092711d::$classMap;

        }, null, ClassLoader::class);
    }
}
