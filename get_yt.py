import urllib.request, re, json
queries = ['macbook+air+m3+shorts', 'samsung+galaxy+s24+ultra+camera+shorts', 'gaming+laptop+under+60000+shorts', 'redmi+note+13+pro+plus+unboxing+shorts', 'iphone+15+pro+max+shorts', 'best+laptop+shorts']
for q in queries:
    req = urllib.request.Request('https://www.youtube.com/results?search_query=' + q, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    matches = re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', html)
    print(q, list(set(matches))[:3])
