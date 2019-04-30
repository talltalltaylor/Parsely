<?php
$all_lines = file('https://thestayathomechef.com/the-best-roasted-broccoli-ever/');
foreach ($all_lines as $line_num => $line)
{
  echo "Line No.-{$line_num}: " . htmlspecicalchars($line) . "\n"; 
}
?> 
