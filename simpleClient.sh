#!/bin/sh

action=$1
mode=$2

wgetOpt=-O-
wgetBin="wget $wgetOpt "
wgetTest="echo wget $wgetOpt "
myKey=44ce07402c4c21ca26071733f9c80077
agendaSlug=hva-evts
agendaUid=18389556
eventUid=293467

help()
{
cat << .END
Usage: $0 [action] <mode>
where action is one of
    'agendauid'
    'agendadesc'
    'agendaevts'
    'eventdata'
and mode can be 
    'test'
.END
}

[ 'x' = 'x'$action ] && help && exit
if [ "x$mode" = "xtest" ]
then
    wgetBin=$wgetTest
fi

case "$action" in

    agendauid)
        #
        echo "get agenda uid resquest"
        $wgetBin https://api.openagenda.com/v1/agendas/uid/$agendaSlug?key=$myKey 2>/dev/null
        echo ' '
        ;;

    agendadesc)
        #
        echo "get my agenda's description"
        $wgetBin https://api.openagenda.com/v1/agendas/$agendaUid?key=$myKey 2>/dev/null
        echo ' '
        ;;

    agendaevts)
        #
        echo "get my agenda events "
        $wgetBin https://api.openagenda.com/v1/agendas/$agendaUid/events?key=$myKey 2>/dev/null
        echo ' '
        ;;

    eventdata)
        #
        echo "get one event datas"
        $wgetBin https://api.openagenda.com/v1/events/$eventUid?key=$myKey
        echo ' '
        ;;

    *)
        help
        ;;
esac


# vim: tw=0
