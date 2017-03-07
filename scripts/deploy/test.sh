#!/bin/bash
tar -zcvf web.tar.gz ./dist/

ftp -n<<!
open 192.168.2.10
user ftp2 Hwsd@ftp1234
type binary
put web.tar.gz /opt/ftp2/vue/web/web.tar.gz
bye
!
