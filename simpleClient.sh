#!/bin/sh -x

wgetOpt=-O-
myKey=44ce07402c4c21ca26071733f9c80077
mySlug=hva-evts

# get my agenda uid
wget $wgetOpt https://api.openagenda.com/v1/agendas/uid/$mySlug?key=$myKey 2>/dev/null

echo ' ' 

# get my agenda all evts
wget $wgetOpt https://api.openagenda.com/v1/agendas/18389556?key=$myKey 2>/dev/null




# vim: tw=0