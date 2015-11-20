#!/bin/sh

wgetOpt=-O-
wgetBin="wget $wgetOpt "
myKey=44ce07402c4c21ca26071733f9c80077
agendaSlug=hva-evts
agendaUid=18389556

# get my agenda uid
echo "get agenda uid resquest"
$wgetBin https://api.openagenda.com/v1/agendas/uid/$agendaSlug?key=$myKey 2>/dev/null
echo ' ' 

# 
echo "get my agenda's description"
$wgetBin https://api.openagenda.com/v1/agendas/$agendaUid?key=$myKey 2>/dev/null
echo ' ' 

# 
echo "get my agenda events "
$wgetBin https://api.openagenda.com/v1/agendas/$agendaUid/events?key=$myKey 2>/dev/null





# vim: tw=0
