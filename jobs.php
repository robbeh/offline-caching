<?php
/**
 * Created by robbeh.
 * Date: 18/11/12
 * Time: 13:25
 */

// Keys must always be unique because when jobs are added and deleted the
// the hidden pages are not so we cannot have the same div id (if we remove them
// then the user will have their page vanish!
$json['1234']['property'] = '15 some street';
$json['3456']['property'] = '123 fake gardens';
$json['5678']['property'] = '52 Glashier drive';
$json['2343']['property'] = '28 x street';
$json['2343']['property'] = '28 x street';

$json['1234']['contract'] = '1';
$json['3456']['contract'] = '2';
$json['5678']['contract'] = '3';
$json['2343']['contract'] = '4';
$json['2343']['contract'] = '5';

echo json_encode($json);