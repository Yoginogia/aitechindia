$imagesDir = "c:\Users\amit\.gemini\antigravity\playground\ancient-radiation\public\images\blog"
$images = @(
    @{ url = "https://image.pollinations.ai/prompt/A_golden_Bitcoin_coin_resting_on_a_pile_of_corporate_earnings_reports_and_financial_charts_in_a_dramatic_lighting?width=1200&height=630&nologo=true"; filename = "crypto-bitcoin-buying-breather-2026-05-04.jpg" },
    @{ url = "https://image.pollinations.ai/prompt/A_glowing_red_warning_sign_over_a_cPanel_dashboard_interface_with_hacker_code_and_ransomware_padlocks_cyber_security?width=1200&height=630&nologo=true"; filename = "software-cpanel-ransomware-2026-05-04.jpg" },
    @{ url = "https://image.pollinations.ai/prompt/A_modern_Xiaomi_smartphone_with_a_glowing_new_battery_being_installed_with_a_20_percent_discount_tag_in_a_tech_store?width=1200&height=630&nologo=true"; filename = "deals-xiaomi-battery-offer-2026-05-04.jpg" }
)

foreach ($img in $images) {
    $outFile = Join-Path -Path $imagesDir -ChildPath $img.filename
    Write-Host "Downloading $($img.filename)..."
    Invoke-WebRequest -Uri $img.url -OutFile $outFile -TimeoutSec 30 -ErrorAction SilentlyContinue
    Write-Host "Done downloading $($img.filename)"
    Start-Sleep -Seconds 5
}
