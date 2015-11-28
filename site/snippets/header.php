<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <meta name="description" content="<?php echo $site->description()->html() ?>">
  <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

  <?php echo css('assets/css/normalize.css') ?>
  <?php echo css('assets/css/main.css') ?>
  <script src="https://use.typekit.net/mlu8vmk.js"></script>
  <script>try{Typekit.load({ async: true });}catch(e){}</script>
</head>
<body class="template--<?php echo $page->template() ?> <?php echo $page->uid() ?>">
<div class="wrapper">
  <header class="header" role="banner">
    <?php snippet('menu') ?>
    <a class="logo" href="<?php echo url() ?>">
      <img src="<?php echo url('assets/images/logo.svg') ?>" alt="<?php echo $site->title()->html() ?>" />
    </a>
  </header>
