<?php
/**
 * Created by robbeh.
 * Date: 18/11/12
 * Time: 13:25
 */

// Keys must always be unique because when jobs are added and deleted the
// the hidden pages are not so we cannot have the same div id (if we remove them
// then the user will have their page vanish!
$json['1234'] = '15 some street';
$json['3456'] = '123 fake gardens';
$json['5678'] = '52 Glashier drive';
$json['2343'] = '28 x street';

echo json_encode($json);