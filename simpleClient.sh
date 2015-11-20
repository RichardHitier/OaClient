#!/bin/sh

wgetOpt=-O-
myKey=44ce07402c4c21ca26071733f9c80077
agendaSlug=hva-evts
agendaUid=18389556

# get my agenda uid
echo 'my agenda uid resquest'
wget $wgetOpt https://api.openagenda.com/v1/agendas/uid/$agendaSlug?key=$myKey 2>/dev/null

echo ' ' 

# get my agenda all evts
echo 'my agenda events resquest'
wget $wgetOpt https://api.openagenda.com/v1/agendas/$agendaUid?key=$myKey 2>/dev/null




# vim: tw=0
