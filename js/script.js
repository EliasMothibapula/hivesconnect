(function() {
    // ----- DATA -----
    const providers = [{
        id: 'p1',
        name: 'John Plumbing Services',
        owner: 'John Modise',
        category: 'Plumbing',
        phone: '+267 71 234 567',
        bookings: 42,
        rating: 4.8,
        reviews: 23,
        desc: 'Licensed plumber with 15 years experience. Fast & reliable service.',
        services: [
            { name: 'Pipe repair', price: 350, basePrice: 350, variable: false, description: 'Standard pipe repair' },
            { name: 'Bathroom installation', price: 800, basePrice: 800, variable: false, description: 'Full bathroom installation' },
            { name: 'Leak detection', price: 400, basePrice: 400, variable: false, description: 'Professional leak detection' },
            { name: 'Emergency plumbing', price: 600, basePrice: 600, variable: false, description: '24/7 emergency service' }
        ],
        verified: true,
        responseTime: '2 min',
        profileImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&h=200&fit=crop&crop=face',
        workPhotos: [
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=200&fit=crop'
        ]
    }, {
        id: 'p2',
        name: 'Sweet Cakes BW',
        owner: 'Keletso Ndlovu',
        category: 'Bakery',
        phone: '+267 72 345 678',
        bookings: 28,
        rating: 4.9,
        reviews: 17,
        desc: 'Custom cakes for all occasions. Fresh ingredients & beautiful designs.',
        services: [
            { name: 'Wedding cake', price: 200, basePrice: 200, variable: true, description: 'Price starts from P200 - depends on size & design' },
            { name: 'Birthday cake', price: 200, basePrice: 200, variable: true, description: 'Price starts from P200 - depends on size & design' },
            { name: 'Cupcakes (dozen)', price: 150, basePrice: 150, variable: false, description: '12 cupcakes - standard price' },
            { name: 'Custom design', price: 200, basePrice: 200, variable: true, description: 'Price starts from P200 - depends on complexity' }
        ],
        verified: true,
        responseTime: '5 min',
        profileImage: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=200&h=200&fit=crop&crop=face',
        workPhotos: [
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=300&h=200&fit=crop'
        ]
    }, {
        id: 'p3',
        name: 'Spark Electrical',
        owner: 'Tebogo Sebina',
        category: 'Electrical',
        phone: '+267 73 456 789',
        bookings: 35,
        rating: 4.7,
        reviews: 19,
        desc: 'Certified electrician for residential & commercial projects. Safe & reliable.',
        services: [
            { name: 'Wiring installation', price: 500, basePrice: 500, variable: false, description: 'Standard wiring installation' },
            { name: 'Lighting solutions', price: 300, basePrice: 300, variable: false, description: 'Lighting installation & design' },
            { name: 'Electrical repairs', price: 400, basePrice: 400, variable: false, description: 'General electrical repairs' },
            { name: 'Safety inspection', price: 250, basePrice: 250, variable: false, description: 'Full electrical safety inspection' }
        ],
        verified: true,
        responseTime: '3 min',
        profileImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=200&h=200&fit=crop&crop=face',
        workPhotos: [
            'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=300&h=200&fit=crop'
        ]
    }, {
        id: 'p4',
        name: 'CleanPro Botswana',
        owner: 'Mpho Kgosi',
        category: 'Cleaning',
        phone: '+267 74 567 890',
        bookings: 56,
        rating: 4.6,
        reviews: 31,
        desc: 'Deep cleaning for homes & offices. Eco-friendly products, professional team.',
        services: [
            { name: 'Deep cleaning (house)', price: 350, basePrice: 350, variable: false, description: 'Full house deep cleaning' },
            { name: 'Office cleaning', price: 400, basePrice: 400, variable: false, description: 'Commercial office cleaning' },
            { name: 'Carpet cleaning', price: 250, basePrice: 250, variable: false, description: 'Professional carpet cleaning' },
            { name: 'Window cleaning', price: 200, basePrice: 200, variable: false, description: 'Interior & exterior window cleaning' }
        ],
        verified: true,
        responseTime: '10 min',
        profileImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&h=200&fit=crop&crop=face',
        workPhotos: [
            'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1527515637462-cff94eecc1af?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=300&h=200&fit=crop'
        ]
    }, {
        id: 'p5',
        name: 'TechFix BW',
        owner: 'Kabelo Masoko',
        category: 'Repair',
        phone: '+267 75 678 901',
        bookings: 19,
        rating: 4.5,
        reviews: 12,
        desc: 'Computer & phone repair. Fast turnaround, genuine parts, expert service.',
        services: [
            { name: 'Phone repair', price: 350, basePrice: 350, variable: false, description: 'Screen & battery replacement' },
            { name: 'Computer repair', price: 450, basePrice: 450, variable: false, description: 'Hardware & software repair' },
            { name: 'Software installation', price: 200, basePrice: 200, variable: false, description: 'Professional software setup' },
            { name: 'Data recovery', price: 500, basePrice: 500, variable: false, description: 'Data recovery from damaged devices' }
        ],
        verified: false,
        responseTime: '15 min',
        profileImage: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=200&h=200&fit=crop&crop=face',
        workPhotos: [
            'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1538916669802-f58fd82e2cd8?w=300&h=200&fit=crop'
        ]
    }];

    // State
    let state = {
        customerWallet: 1000,
        smeWallet: 200,
        bookings: [],
        completedJobs: [],
        reviews: [],
        nextId: 1,
        filteredProviders: [...providers],
        customerTotalSpent: 0,
        customerTotalBookings: 0,
        customerReviewsGiven: 0,
        smeTotalEarnings: 0,
        smeJobsCompleted: 0,
        smeRatings: [],
        currentCategory: 'all',
        currentCancelBookingId: null,
        currentReviewBookingId: null,
        currentReviewRating: 0,
        selectedService: null,
        priceUpdatePending: false
    };

    // DOM refs
    const custWalletEl = document.getElementById('custWallet');
    const smeWalletEl = document.getElementById('smeWallet');
    const custEscrowEl = document.getElementById('custEscrow');
    const smePendingEl = document.getElementById('smePending');
    const globalWalletEl = document.getElementById('globalWallet');
    const providerGrid = document.getElementById('providerGrid');
    const popularServicesEl = document.getElementById('popularServices');
    const customerBookingsEl = document.getElementById('customerBookings');
    const smeRequestsEl = document.getElementById('smeRequests');
    const smeCompletedEl = document.getElementById('smeCompleted');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const depositBtn = document.getElementById('depositBtn');
    const depositModal = document.getElementById('depositModal');
    const closeDepositModal = document.getElementById('closeDepositModal');
    const cancelDeposit = document.getElementById('cancelDeposit');
    const confirmDeposit = document.getElementById('confirmDeposit');
    const depositAmount = document.getElementById('depositAmount');
    const depositMethod = document.getElementById('depositMethod');
    const bookingModal = document.getElementById('bookingModal');
    const closeBookingModal = document.getElementById('closeBookingModal');
    const cancelBookingModal = document.getElementById('cancelBookingModal');
    const confirmBooking = document.getElementById('confirmBooking');
    const bookingModalTitle = document.getElementById('bookingModalTitle');
    const bookingServiceType = document.getElementById('bookingServiceType');
    const bookingAddress = document.getElementById('bookingAddress');
    const bookingDateTime = document.getElementById('bookingDateTime');
    const bookingUrgency = document.getElementById('bookingUrgency');
    const bookingDetails = document.getElementById('bookingDetails');
    const bookingNotes = document.getElementById('bookingNotes');
    const photoUpload = document.getElementById('photoUpload');
    const photoUploadTrigger = document.getElementById('photoUploadTrigger');
    const photoPreviewContainer = document.getElementById('photoPreviewContainer');
    const providerDetailModal = document.getElementById('providerDetailModal');
    const closeProviderDetail = document.getElementById('closeProviderDetail');
    const providerDetailContent = document.getElementById('providerDetailContent');
    const reviewModal = document.getElementById('reviewModal');
    const closeReviewModal = document.getElementById('closeReviewModal');
    const cancelReview = document.getElementById('cancelReview');
    const submitReview = document.getElementById('submitReview');
    const reviewProviderName = document.getElementById('reviewProviderName');
    const reviewComment = document.getElementById('reviewComment');
    const reviewStars = document.getElementById('reviewStars');
    const cancelReasonModal = document.getElementById('cancelReasonModal');
    const closeCancelReason = document.getElementById('closeCancelReason');
    const cancelCancel = document.getElementById('cancelCancel');
    const confirmCancelBooking = document.getElementById('confirmCancelBooking');
    const cancelReason = document.getElementById('cancelReason');

    // Set default datetime
    const now = new Date();
    const future = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const datetimeStr = future.toISOString().slice(0, 16);
    if (bookingDateTime) bookingDateTime.value = datetimeStr;

    // ----- SME Action Modal -----
    const smeActionModal = document.createElement('div');
    smeActionModal.id = 'smeActionModal';
    smeActionModal.className = 'modal hide';
    smeActionModal.innerHTML = `
        <div class="modal-card">
            <button class="close-btn" id="closeSmeAction">&times;</button>
            <h3 id="smeActionTitle">Respond to booking</h3>
            <div id="smeActionBody">
                <div class="form-group">
                    <label>Comment to customer</label>
                    <textarea id="smeComment" placeholder="Add a comment about this booking..." style="width:100%;padding:0.6rem;border-radius:12px;border:1px solid #dce2ea;min-height:80px;font-family:inherit;"></textarea>
                </div>
                <div class="form-group">
                    <label>Additional price (optional)</label>
                    <input type="number" id="smeSuggestedPrice" placeholder="Enter additional amount" style="width:100%;padding:0.6rem;border-radius:12px;border:1px solid #dce2ea;">
                    <small class="text-muted">This will be added to the current price. Leave empty to keep current price.</small>
                </div>
                <div class="flex space-between mt-2">
                    <button class="btn btn-outline" id="cancelSmeAction">Cancel</button>
                    <div>
                        <button class="btn btn-danger" id="smeRefuseBtn" style="margin-right:8px;">Decline</button>
                        <button class="btn btn-success" id="smeRespondBtn">Send Response</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(smeActionModal);

    // ----- SME Accept Modal -----
    const smeAcceptModal = document.createElement('div');
    smeAcceptModal.id = 'smeAcceptModal';
    smeAcceptModal.className = 'modal hide';
    smeAcceptModal.innerHTML = `
        <div class="modal-card">
            <button class="close-btn" id="closeSmeAccept">&times;</button>
            <h3>Accept Booking</h3>
            <div id="smeAcceptBody">
                <p>Are you sure you want to accept this booking?</p>
                <div style="padding:1rem;background:#f8f9fa;border-radius:12px;margin:1rem 0;" id="smeAcceptDetails">
                    <div><strong>Service:</strong> <span id="acceptService"></span></div>
                    <div><strong>Price:</strong> P<span id="acceptPrice"></span></div>
                    <div><strong>Customer:</strong> <span id="acceptCustomer">Demo Customer</span></div>
                </div>
                <div class="form-group">
                    <label>Message to customer (optional)</label>
                    <textarea id="smeAcceptComment" placeholder="Add a welcome message..." style="width:100%;padding:0.6rem;border-radius:12px;border:1px solid #dce2ea;min-height:60px;font-family:inherit;"></textarea>
                </div>
                <div class="flex space-between mt-2">
                    <button class="btn btn-outline" id="cancelSmeAccept">Cancel</button>
                    <button class="btn btn-success" id="confirmSmeAccept">Accept Booking</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(smeAcceptModal);

    // ----- Price Confirmation Modal -----
    const priceConfirmModal = document.createElement('div');
    priceConfirmModal.id = 'priceConfirmModal';
    priceConfirmModal.className = 'modal hide';
    priceConfirmModal.innerHTML = `
        <div class="modal-card">
            <button class="close-btn" id="closePriceConfirm">&times;</button>
            <h3>Price Update</h3>
            <div id="priceConfirmBody">
                <p>The service provider has suggested an additional price for your booking:</p>
                <div style="padding:1rem;background:#f8f9fa;border-radius:12px;margin:1rem 0;">
                    <div><strong>Service:</strong> <span id="priceConfirmService"></span></div>
                    <div><strong>Current price:</strong> P<span id="priceConfirmOriginal"></span></div>
                    <div><strong>Additional amount:</strong> P<span id="priceConfirmAdditional"></span></div>
                    <div><strong>New total:</strong> P<span id="priceConfirmNewTotal"></span></div>
                    <div><strong>Comment:</strong> <span id="priceConfirmComment"></span></div>
                </div>
                <div class="form-group">
                    <label>Your response (optional)</label>
                    <textarea id="customerResponseToSME" placeholder="Add a comment for the service provider..." style="width:100%;padding:0.6rem;border-radius:12px;border:1px solid #dce2ea;min-height:60px;font-family:inherit;"></textarea>
                </div>
                <div class="flex space-between mt-2">
                    <div>
                        <button class="btn btn-danger" id="priceRejectAndCancel">Reject & Cancel</button>
                        <button class="btn btn-warning" id="priceReject" style="margin-left:8px;">Reject & Comment</button>
                    </div>
                    <button class="btn btn-success" id="priceAccept">Accept</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(priceConfirmModal);

    let currentBookingActionId = null;
    let currentSmeAction = null;
    let pendingPriceUpdate = null;
    let currentBookingProvider = null;
    let currentPhotoData = null;
    let selectedServiceData = null;

    // ----- UPDATE UI -----
    function updateUI() {
        custWalletEl.textContent = state.customerWallet;
        smeWalletEl.textContent = state.smeWallet;
        document.getElementById('custWalletDisplay').textContent = state.customerWallet;

        const escrowTotal = state.bookings
            .filter(b => b.status === 'escrow' || b.status === 'pending' || b.status === 'confirmed')
            .reduce((sum, b) => sum + b.price, 0);
        custEscrowEl.textContent = escrowTotal;
        smePendingEl.textContent = escrowTotal;
        globalWalletEl.textContent = state.customerWallet + state.smeWallet + escrowTotal;

        document.getElementById('custTotalSpent').textContent = state.customerTotalSpent;
        document.getElementById('custTotalBookings').textContent = state.customerTotalBookings;
        document.getElementById('custReviewsGiven').textContent = state.customerReviewsGiven;

        document.getElementById('smeTotalEarnings').textContent = state.smeTotalEarnings;
        document.getElementById('smeJobsCompleted').textContent = state.smeJobsCompleted;
        const avg = state.smeRatings.length > 0 ?
            (state.smeRatings.reduce((a, b) => a + b, 0) / state.smeRatings.length) : 0;
        document.getElementById('smeAvgRatingDisplay').textContent = avg.toFixed(1);

        // Update analytics
        if (state.customerTotalBookings > 0) {
            document.getElementById('custFavoriteService').textContent = 'Plumbing';
        } else {
            document.getElementById('custFavoriteService').textContent = '-';
        }

        renderProviders();
        renderPopularServices();
        renderCustomerBookings();
        renderSmeRequests();
        renderSmeCompleted();
        updateSMEStats();
        updateCustomerAnalytics();
        updateSmeAnalytics();
    }

    // ----- UPDATE SME STATS -----
    function updateSMEStats() {
        const today = new Date();
        const todayStr = today.toDateString();
        const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

        let todayEarnings = 0;
        let weekEarnings = 0;
        let uniqueCustomers = new Set();

        state.completedJobs.forEach(job => {
            const jobDate = new Date(job.createdAt);
            if (jobDate.toDateString() === todayStr) {
                todayEarnings += job.smeShare || 0;
            }
            if (jobDate >= weekAgo) {
                weekEarnings += job.smeShare || 0;
            }
            uniqueCustomers.add(job.customerId || 'customer');
        });

        document.getElementById('smeTodayEarnings').textContent = todayEarnings;
        document.getElementById('smeWeekEarnings').textContent = weekEarnings;
        document.getElementById('smeCustomersServed').textContent = uniqueCustomers.size;

        const totalJobs = state.completedJobs.length;
        const satisfaction = totalJobs > 0 ? Math.round((state.smeRatings.reduce((a,b) => a + b, 0) / totalJobs) * 20) : 0;
        document.getElementById('smeSatisfaction').textContent = satisfaction + '%';

        const serviceCount = {};
        state.completedJobs.forEach(job => {
            if (job.serviceType) {
                serviceCount[job.serviceType] = (serviceCount[job.serviceType] || 0) + 1;
            }
        });
        let topService = '-';
        let maxCount = 0;
        for (const [service, count] of Object.entries(serviceCount)) {
            if (count > maxCount) {
                maxCount = count;
                topService = service;
            }
        }
        document.getElementById('smeTopService').textContent = topService;
    }

    // ----- UPDATE CUSTOMER ANALYTICS -----
    function updateCustomerAnalytics() {
        const bookings = state.bookings;
        const completed = bookings.filter(b => b.status === 'completed');
        const cancelled = bookings.filter(b => b.status === 'cancelled' || b.status === 'refused');
        const totalSpent = state.customerTotalSpent;
        
        document.getElementById('custTotalSpentAnalytics').textContent = totalSpent;
        
        const avgBooking = completed.length > 0 ? Math.round(totalSpent / state.customerTotalBookings) : 0;
        document.getElementById('custAvgBooking').textContent = avgBooking;
        document.getElementById('custBookingCountAnalytics').textContent = state.customerTotalBookings;
        
        let mostExpensive = 0;
        let mostExpensiveService = '-';
        completed.forEach(b => {
            if (b.price > mostExpensive) {
                mostExpensive = b.price;
                mostExpensiveService = b.serviceType || 'Service';
            }
        });
        document.getElementById('custMostExpensive').textContent = mostExpensive;
        document.getElementById('custMostExpensiveService').textContent = mostExpensiveService;
        
        const fees = Math.round(totalSpent * 0.05);
        document.getElementById('custPlatformFees').textContent = fees;
        
        document.getElementById('custTotalBookingsAnalytics').textContent = state.customerTotalBookings;
        document.getElementById('custCompletedBookings').textContent = completed.length;
        document.getElementById('custCancelledBookings').textContent = cancelled.length;
        const cancelRate = state.customerTotalBookings > 0 ? Math.round((cancelled.length / state.customerTotalBookings) * 100) : 0;
        document.getElementById('custCancelRate').textContent = cancelRate;
        
        const serviceCount = {};
        completed.forEach(b => {
            if (b.serviceType) {
                serviceCount[b.serviceType] = (serviceCount[b.serviceType] || 0) + 1;
            }
        });
        let mostBooked = '-';
        let mostBookedCount = 0;
        for (const [service, count] of Object.entries(serviceCount)) {
            if (count > mostBookedCount) {
                mostBookedCount = count;
                mostBooked = service;
            }
        }
        document.getElementById('custMostBookedService').textContent = mostBooked;
        document.getElementById('custMostBookedCount').textContent = mostBookedCount;
        
        const providerCount = {};
        completed.forEach(b => {
            providerCount[b.providerName] = (providerCount[b.providerName] || 0) + 1;
        });
        let favProvider = '-';
        let favCount = 0;
        for (const [provider, count] of Object.entries(providerCount)) {
            if (count > favCount) {
                favCount = count;
                favProvider = provider;
            }
        }
        document.getElementById('custFavoriteProvider').textContent = favProvider;
        document.getElementById('custFavoriteProviderBookings').textContent = favCount;
        
        const uniqueProviders = new Set(completed.map(b => b.providerName));
        document.getElementById('custUniqueProviders').textContent = uniqueProviders.size;
        const repeatRate = uniqueProviders.size > 0 ? Math.round((state.customerTotalBookings - uniqueProviders.size) / state.customerTotalBookings * 100) : 0;
        document.getElementById('custRepeatRate').textContent = repeatRate;
        
        const reviews = state.reviews;
        document.getElementById('custReviewsGivenAnalytics').textContent = reviews.length;
        const avgRating = reviews.length > 0 ? (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length) : 0;
        document.getElementById('custAvgRatingGiven').textContent = avgRating.toFixed(1);
        document.getElementById('custReviewCountAnalytics').textContent = reviews.length;
        
        const ratingCount = {};
        reviews.forEach(r => {
            ratingCount[r.rating] = (ratingCount[r.rating] || 0) + 1;
        });
        let commonRating = '-';
        let commonCount = 0;
        for (const [rating, count] of Object.entries(ratingCount)) {
            if (count > commonCount) {
                commonCount = count;
                commonRating = rating;
            }
        }
        document.getElementById('custMostCommonRating').textContent = commonRating;
        
        document.getElementById('custPreferredTime').textContent = 'Morning';
        document.getElementById('custTimeCount').textContent = completed.length > 0 ? Math.round(completed.length * 0.4) : 0;
        document.getElementById('custPreferredDay').textContent = 'Saturday';
        document.getElementById('custDayCount').textContent = completed.length > 0 ? Math.round(completed.length * 0.3) : 0;
        
        const emergencyCount = completed.filter(b => b.urgency && b.urgency.includes('Emergency')).length;
        document.getElementById('custEmergencyCount').textContent = emergencyCount;
        
        document.getElementById('custAvgValue').textContent = avgBooking;
        document.getElementById('custValueTrend').textContent = Math.round(Math.random() * 15 + 5);
        document.getElementById('custAvgCompletionTime').textContent = '2.5 days';
        document.getElementById('custSpentTrend').textContent = '+12% this month';
    }

    // ----- UPDATE SME ANALYTICS -----
    function updateSmeAnalytics() {
        const completed = state.completedJobs;
        const totalEarnings = state.smeTotalEarnings;
        
        document.getElementById('smeTotalEarningsAnalytics').textContent = totalEarnings;
        document.getElementById('smeEarningsTrend').textContent = '+18% this month';
        
        const fees = Math.round(totalEarnings * 0.05);
        document.getElementById('smePlatformFees').textContent = fees;
        
        const avgPerJob = completed.length > 0 ? Math.round(totalEarnings / completed.length) : 0;
        document.getElementById('smeAvgPerJob').textContent = avgPerJob;
        
        let highestJob = 0;
        completed.forEach(j => {
            if (j.price > highestJob) highestJob = j.price;
        });
        document.getElementById('smeHighestJob').textContent = highestJob;
        
        const serviceEarnings = {};
        completed.forEach(j => {
            if (j.serviceType) {
                serviceEarnings[j.serviceType] = (serviceEarnings[j.serviceType] || 0) + j.price;
            }
        });
        let profitableService = '-';
        let profitableAmount = 0;
        for (const [service, amount] of Object.entries(serviceEarnings)) {
            if (amount > profitableAmount) {
                profitableAmount = amount;
                profitableService = service;
            }
        }
        document.getElementById('smeProfitableService').textContent = profitableService;
        document.getElementById('smeProfitableAmount').textContent = profitableAmount;
        
        document.getElementById('smeJobsCompletedAnalytics').textContent = completed.length;
        const totalBookings = state.bookings.length;
        const acceptanceRate = totalBookings > 0 ? Math.round((completed.length / totalBookings) * 100) : 0;
        document.getElementById('smeAcceptanceRate').textContent = acceptanceRate;
        
        const completionRate = totalBookings > 0 ? Math.round((completed.length / (completed.length + state.bookings.filter(b => b.status === 'cancelled' || b.status === 'refused').length)) * 100) : 0;
        document.getElementById('smeCompletionRate').textContent = completionRate;
        document.getElementById('smeCompletionTrend').textContent = Math.round(Math.random() * 5 + 2);
        
        const serviceCount = {};
        completed.forEach(j => {
            if (j.serviceType) {
                serviceCount[j.serviceType] = (serviceCount[j.serviceType] || 0) + 1;
            }
        });
        let commonService = '-';
        let commonCount = 0;
        let services = [];
        for (const [service, count] of Object.entries(serviceCount)) {
            services.push({service, count});
        }
        services.sort((a, b) => b.count - a.count);
        
        if (services.length > 0) {
            document.getElementById('smeCommonService').textContent = services[0].service;
            document.getElementById('smeCommonCount').textContent = services[0].count;
        }
        if (services.length > 1) {
            document.getElementById('smeSecondService').textContent = services[1].service;
            document.getElementById('smeSecondCount').textContent = services[1].count;
        }
        if (services.length > 2) {
            document.getElementById('smeThirdService').textContent = services[2].service;
            document.getElementById('smeThirdCount').textContent = services[2].count;
        }
        
        document.getElementById('smeAvgDuration').textContent = '2.5 hours';
        document.getElementById('smeQuickestJob').textContent = '30 min';
        
        const customers = new Set(completed.map(j => j.customerId || 'customer'));
        document.getElementById('smeTotalCustomers').textContent = customers.size;
        document.getElementById('smeNewCustomers').textContent = Math.round(customers.size * 0.2);
        
        const repeatCustomers = completed.length > customers.size ? customers.size : Math.round(customers.size * 0.3);
        document.getElementById('smeRepeatCustomers').textContent = repeatCustomers;
        const repeatRate = customers.size > 0 ? Math.round((repeatCustomers / customers.size) * 100) : 0;
        document.getElementById('smeRepeatRate').textContent = repeatRate;
        
        document.getElementById('smeTopCustomer').textContent = 'Demo Customer';
        document.getElementById('smeTopCustomerSpend').textContent = totalEarnings;
        
        document.getElementById('smeRetentionRate').textContent = Math.round(Math.random() * 30 + 60);
        document.getElementById('smeRetentionTrend').textContent = Math.round(Math.random() * 5 + 1);
        
        const avgRating = state.smeRatings.length > 0 ? (state.smeRatings.reduce((a, r) => a + r, 0) / state.smeRatings.length) : 0;
        document.getElementById('smeAvgRatingAnalytics').textContent = avgRating.toFixed(1);
        document.getElementById('smeRatingCount').textContent = state.smeRatings.length;
        
        const ratingDist = {};
        state.smeRatings.forEach(r => {
            ratingDist[r] = (ratingDist[r] || 0) + 1;
        });
        let distText = '';
        let mostCommon = '-';
        let mostCommonCount = 0;
        for (const [rating, count] of Object.entries(ratingDist)) {
            distText += `${rating}★:${count} `;
            if (count > mostCommonCount) {
                mostCommonCount = count;
                mostCommon = rating;
            }
        }
        document.getElementById('smeRatingDistribution').textContent = distText || 'No ratings';
        document.getElementById('smeMostCommonRating').textContent = mostCommon;
        
        document.getElementById('smeAvgResponseTime').textContent = '2.4 min';
        document.getElementById('smeResponseTrend').textContent = '30';
        
        const satisfaction = completed.length > 0 ? Math.round((state.smeRatings.reduce((a,b) => a + b, 0) / completed.length) * 20) : 0;
        document.getElementById('smeSatisfactionAnalytics').textContent = satisfaction;
        document.getElementById('smeSatisfactionTrend').textContent = Math.round(Math.random() * 5 + 2);
        
        // Top services for analytics
        if (services.length > 0) {
            document.getElementById('smeTopServiceAnalytics').textContent = services[0].service;
            document.getElementById('smeTopServiceCount').textContent = services[0].count;
        }
        
        // Price range
        let minPrice = Infinity;
        let maxPrice = 0;
        let totalPrice = 0;
        completed.forEach(j => {
            if (j.price < minPrice) minPrice = j.price;
            if (j.price > maxPrice) maxPrice = j.price;
            totalPrice += j.price;
        });
        document.getElementById('smePriceMin').textContent = minPrice === Infinity ? 0 : minPrice;
        document.getElementById('smePriceMax').textContent = maxPrice;
        document.getElementById('smePriceAvg').textContent = completed.length > 0 ? Math.round(totalPrice / completed.length) : 0;
        
        document.getElementById('smeJobGrowth').textContent = Math.round(Math.random() * 15 + 5);
        document.getElementById('smeRevenueGrowth').textContent = Math.round(Math.random() * 15 + 5);
        document.getElementById('smeNewCustomersMonth').textContent = Math.round(Math.random() * 8 + 2);
        document.getElementById('smeCustomerGrowth').textContent = Math.round(Math.random() * 10 + 2);
        document.getElementById('smeBusiestDay').textContent = 'Saturday';
        document.getElementById('smeBusiestDayCount').textContent = Math.round(completed.length * 0.2);
        
        document.getElementById('smeTotalEscrow').textContent = totalEarnings + Math.round(Math.random() * 1000);
        document.getElementById('smePendingPayments').textContent = state.bookings.filter(b => b.status === 'escrow').reduce((sum, b) => sum + b.price, 0);
        document.getElementById('smeAvgPaymentTime').textContent = '2 days';
        document.getElementById('smeWithdrawals').textContent = Math.round(Math.random() * 10 + 2);
        document.getElementById('smePaymentMethod').textContent = 'Mobile Wallet';
    }

    // ----- RENDER PROVIDERS -----
    function renderProviders() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let filtered = providers;

        if (state.currentCategory !== 'all') {
            filtered = filtered.filter(p => p.category === state.currentCategory);
        }

        if (searchTerm) {
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(searchTerm) ||
                p.category.toLowerCase().includes(searchTerm) ||
                p.desc.toLowerCase().includes(searchTerm) ||
                p.owner.toLowerCase().includes(searchTerm) ||
                p.services.some(s => s.name.toLowerCase().includes(searchTerm))
            );
        }

        state.filteredProviders = filtered;

        if (filtered.length === 0) {
            providerGrid.innerHTML =
                `<div class="card"><p class="text-muted">No providers found. Try a different search.</p></div>`;
            return;
        }

        providerGrid.innerHTML = filtered.map(p => `
            <div class="provider-card" data-id="${p.id}">
                <div class="flex">
                    <div class="icon-wrap">
                        <img src="${p.profileImage}" alt="${p.name}" 
                             onerror="this.style.display='none';this.parentElement.innerHTML='<i class=\\'fas fa-${p.category === 'Plumbing' ? 'wrench' : p.category === 'Bakery' ? 'cake' : p.category === 'Electrical' ? 'bolt' : p.category === 'Cleaning' ? 'broom' : 'laptop'}\\'></i>'">
                    </div>
                    <div>
                        <div class="name">${p.name} ${p.verified ? '<span class="verification-badge"><i class="fas fa-check-circle"></i> Verified</span>' : ''}</div>
                        <div class="meta"><i class="fas fa-user"></i> ${p.owner} · <i class="fas fa-tag"></i> ${p.category}</div>
                    </div>
                </div>
                <div class="meta">
                    <span class="rating"><i class="fas fa-star"></i> ${p.rating}</span> 
                    (${p.reviews} reviews) · ${p.bookings} bookings
                    <span style="margin-left:8px;font-size:0.8rem;color:#4a627f;"><i class="fas fa-clock"></i> ${p.responseTime}</span>
                </div>
                <div class="text-muted" style="font-size:0.85rem;margin:4px 0;">${p.desc}</div>
                <div style="font-size:0.8rem;color:#4a627f;margin:4px 0;">
                    <i class="fas fa-list"></i> ${p.services.slice(0,3).map(s => s.name).join(' · ')}${p.services.length > 3 ? ' ...' : ''}
                </div>
                <div class="flex space-between mt-2">
                    <span><strong>From P${Math.min(...p.services.map(s => s.price))}</strong></span>
                    <div>
                        <button class="btn btn-sm btn-info view-provider-btn" data-id="${p.id}" style="margin-right:4px;">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-sm btn-success book-btn" data-id="${p.id}">
                            <i class="fas fa-handshake"></i> Book
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        document.querySelectorAll('.book-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const id = this.dataset.id;
                const provider = providers.find(p => p.id === id);
                if (!provider) return;
                
                const minPrice = Math.min(...provider.services.map(s => s.price));
                if (state.customerWallet < minPrice) {
                    alert(`Insufficient balance. You need at least P${minPrice} for the cheapest service.`);
                    return;
                }
                
                currentBookingProvider = provider;
                bookingModalTitle.textContent = `Book ${provider.name}`;
                bookingServiceType.innerHTML = `<option value="">Select service type...</option>` +
                    provider.services.map(s => 
                        `<option value="${s.name}" data-price="${s.price}" data-variable="${s.variable}" data-description="${s.description}">
                            ${s.name} - P${s.price}${s.variable ? ' (price may vary)' : ''}
                        </option>`
                    ).join('');
                bookingModal.classList.remove('hide');
                selectedServiceData = null;
            });
        });

        document.querySelectorAll('.view-provider-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const id = this.dataset.id;
                const provider = providers.find(p => p.id === id);
                if (!provider) return;
                showProviderDetail(provider);
            });
        });
    }

    // ----- RENDER POPULAR SERVICES -----
    function renderPopularServices() {
        const popular = [
            { name: 'Pipe Repair', icon: 'fa-wrench', price: '350+' },
            { name: 'Birthday Cake', icon: 'fa-cake', price: '200+' },
            { name: 'Electrical Wiring', icon: 'fa-bolt', price: '500+' },
            { name: 'Deep Cleaning', icon: 'fa-broom', price: '350+' },
            { name: 'Phone Repair', icon: 'fa-mobile-alt', price: '350+' }
        ];

        popularServicesEl.innerHTML = popular.map(p => `
            <div class="popular-item" onclick="document.getElementById('searchInput').value='${p.name}';document.getElementById('searchBtn').click()">
                <i class="fas ${p.icon}"></i>
                <div class="popular-name">${p.name}</div>
                <div class="popular-price">From P${p.price}</div>
            </div>
        `).join('');
    }

    // ----- SHOW PROVIDER DETAIL -----
    function showProviderDetail(provider) {
        const reviews = state.reviews.filter(r => r.providerId === provider.id);
        const avgRating = reviews.length > 0 ?
            (reviews.reduce((a, b) => a + b.rating, 0) / reviews.length) :
            provider.rating;

        providerDetailContent.innerHTML = `
            <div class="flex" style="margin-bottom:1rem;">
                <div class="icon-wrap" style="width:80px;height:80px;border-radius:50%;overflow:hidden;flex-shrink:0;">
                    <img src="${provider.profileImage}" alt="${provider.name}" 
                         style="width:100%;height:100%;object-fit:cover;"
                         onerror="this.style.display='none';this.parentElement.innerHTML='<i class=\\'fas fa-${provider.category === 'Plumbing' ? 'wrench' : provider.category === 'Bakery' ? 'cake' : provider.category === 'Electrical' ? 'bolt' : provider.category === 'Cleaning' ? 'broom' : 'laptop'}\\' style=\\'font-size:2.5rem;\\'></i>'">
                </div>
                <div>
                    <h2>${provider.name} ${provider.verified ? '<span class="verification-badge"><i class="fas fa-check-circle"></i> Verified</span>' : ''}</h2>
                    <div class="meta"><i class="fas fa-user"></i> ${provider.owner} · <i class="fas fa-phone"></i> ${provider.phone}</div>
                    <div class="meta">
                        <span class="rating"><i class="fas fa-star"></i> ${avgRating.toFixed(1)}</span> 
                        (${reviews.length} reviews) · ${provider.bookings} bookings
                        <span style="margin-left:8px;"><i class="fas fa-clock"></i> Avg. response: ${provider.responseTime}</span>
                    </div>
                </div>
            </div>
            <p><strong>About:</strong> ${provider.desc}</p>
            <div class="mt-2"><strong>Services & Pricing:</strong></div>
            <div style="margin:0.5rem 0;">
                ${provider.services.map(s => `
                    <div style="display:flex;justify-content:space-between;padding:0.3rem 0;border-bottom:1px solid #e9edf2;">
                        <div>
                            <strong>${s.name}</strong>
                            ${s.variable ? '<span style="color:#b02a37;font-size:0.8rem;"> (price may vary)</span>' : ''}
                            <div class="text-muted" style="font-size:0.8rem;">${s.description}</div>
                        </div>
                        <div style="font-weight:600;">P${s.price}</div>
                    </div>
                `).join('')}
            </div>
            <div class="mt-2"><strong>Work Gallery:</strong></div>
            <div class="work-photos">
                ${provider.workPhotos.map(url => 
                    `<img src="${url}" alt="Work photo" onerror="this.style.display='none'">`
                ).join('')}
            </div>
            <div class="mt-2"><strong>Customer Reviews:</strong></div>
            ${reviews.length > 0 ? reviews.map(r => `
                <div style="border-bottom:1px solid #e9edf2;padding:0.5rem 0;">
                    <div>
                        <span class="rating">${'★'.repeat(Math.round(r.rating))}${'☆'.repeat(5-Math.round(r.rating))}</span> 
                        by ${r.customerName}
                    </div>
                    <div class="text-muted" style="font-size:0.85rem;">${r.comment}</div>
                </div>
            `).join('') : '<p class="text-muted">No reviews yet.</p>'}
            <div class="mt-2 flex space-between">
                <button class="btn btn-sm btn-outline close-detail-btn">Close</button>
                <button class="btn btn-sm btn-success book-from-detail-btn" data-id="${provider.id}">
                    <i class="fas fa-handshake"></i> Book Now
                </button>
            </div>
        `;
        providerDetailModal.classList.remove('hide');

        document.querySelector('.close-detail-btn')?.addEventListener('click', function() {
            providerDetailModal.classList.add('hide');
        });

        document.querySelector('.book-from-detail-btn')?.addEventListener('click', function() {
            const id = this.dataset.id;
            const provider = providers.find(p => p.id === id);
            if (!provider) return;
            
            const minPrice = Math.min(...provider.services.map(s => s.price));
            if (state.customerWallet < minPrice) {
                alert(`Insufficient balance. You need at least P${minPrice} for the cheapest service.`);
                return;
            }
            
            providerDetailModal.classList.add('hide');
            currentBookingProvider = provider;
            bookingModalTitle.textContent = `Book ${provider.name}`;
            bookingServiceType.innerHTML = `<option value="">Select service type...</option>` +
                provider.services.map(s => 
                    `<option value="${s.name}" data-price="${s.price}" data-variable="${s.variable}" data-description="${s.description}">
                        ${s.name} - P${s.price}${s.variable ? ' (price may vary)' : ''}
                    </option>`
                ).join('');
            bookingModal.classList.remove('hide');
            selectedServiceData = null;
        });
    }

    // ----- RENDER CUSTOMER BOOKINGS -----
    function renderCustomerBookings() {
        const custBookings = state.bookings.filter(b =>
            b.status !== 'completed' && b.status !== 'cancelled' && b.status !== 'refused'
        );

        if (custBookings.length === 0) {
            customerBookingsEl.innerHTML = `<p class="text-muted">No active bookings.</p>`;
            return;
        }

        customerBookingsEl.innerHTML = custBookings.map(b => {
            let statusClass = 'status-pending';
            let actions = '';
            let timerHtml = '';
            let statusLabel = b.status;

            const hasPendingPriceUpdate = b.pendingPriceUpdate && !b.priceUpdateAccepted && !b.priceUpdateRejected;

            if (b.status === 'pending' || b.status === 'escrow' || b.status === 'confirmed') {
                const elapsed = (Date.now() - b.createdAt) / 60000;
                const canCancel = elapsed < 10 && !b.customerConfirmed && !b.smeConfirmed;

                if (canCancel) {
                    const remaining = Math.ceil(10 - elapsed);
                    timerHtml = `<span class="countdown-timer"><i class="fas fa-clock"></i> ${remaining}m to cancel</span>`;
                    actions = `<button class="btn btn-sm btn-danger cancel-booking-btn" data-id="${b.id}">
                        <i class="fas fa-times"></i> Cancel
                    </button>`;
                } else if (elapsed >= 10 && !b.customerConfirmed && !b.smeConfirmed) {
                    timerHtml = `<span class="text-muted">Cancellation closed</span>`;
                }

                if (hasPendingPriceUpdate) {
                    actions = `
                        <button class="btn btn-sm btn-warning view-price-update-btn" data-id="${b.id}">
                            <i class="fas fa-edit"></i> View Price Update
                        </button>
                    `;
                } else if (b.smeConfirmed && !b.customerConfirmed) {
                    actions = `
                        <span class="status-badge status-pending">Awaiting your confirmation</span>
                        <button class="btn btn-sm btn-success confirm-customer-btn" data-id="${b.id}">
                            Mark Done
                        </button>
                    `;
                } else if (b.customerConfirmed && !b.smeConfirmed) {
                    actions = `<span class="status-badge status-pending">Waiting for SME</span>`;
                } else if (b.customerConfirmed && b.smeConfirmed && b.status === 'escrow') {
                    completeBooking(b);
                    actions = `<span class="status-badge status-completed">Complete</span>`;
                }
            }

            if (b.status === 'pending') statusLabel = 'Pending';
            else if (b.status === 'confirmed') statusLabel = 'Confirmed';
            else if (b.status === 'escrow') statusLabel = 'In Escrow';

            return `
                <div class="transaction-item">
                    <div class="item-details">
                        <strong>${b.providerName}</strong> · P${b.price} 
                        <span class="status-badge ${statusClass}">${statusLabel}</span>
                        ${timerHtml}
                        ${b.serviceType ? `<div class="text-muted" style="font-size:0.8rem;">Service: ${b.serviceType}</div>` : ''}
                        ${b.urgency ? `<div class="text-muted" style="font-size:0.8rem;">Urgency: ${b.urgency}</div>` : ''}
                        ${b.priceVaries ? `<div class="text-muted" style="font-size:0.8rem;color:#b02a37;">Note: Final price may vary</div>` : ''}
                        ${hasPendingPriceUpdate ? `<div class="text-muted" style="font-size:0.8rem;color:#0d6efd;">SME has suggested an additional amount</div>` : ''}
                        ${b.smeComment ? `<div class="text-muted" style="font-size:0.85rem;background:#f8f9fa;padding:4px 8px;border-radius:6px;margin-top:4px;">SME: ${b.smeComment}</div>` : ''}
                        ${b.customerResponse ? `<div class="text-muted" style="font-size:0.85rem;background:#e8f4fd;padding:4px 8px;border-radius:6px;margin-top:4px;">Your response: ${b.customerResponse}</div>` : ''}
                        ${b.cancellationReason ? `<div class="cancellation-reason">${b.cancellationReason}</div>` : ''}
                        ${b.details ? `<div class="text-muted" style="font-size:0.8rem;">Details: ${b.details}</div>` : ''}
                        ${b.notes ? `<div class="text-muted" style="font-size:0.8rem;">Notes: ${b.notes}</div>` : ''}
                        ${b.photoData ? `<img src="${b.photoData}" style="max-width:80px;max-height:60px;border-radius:4px;margin-top:4px;">` : ''}
                    </div>
                    <span>${actions}</span>
                </div>
            `;
        }).join('');

        document.querySelectorAll('.cancel-booking-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                state.currentCancelBookingId = id;
                cancelMode = 'cancel';
                cancelReasonModal.dataset.mode = 'cancel';
                cancelReasonModal.classList.remove('hide');
            });
        });

        document.querySelectorAll('.view-price-update-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const booking = state.bookings.find(b => b.id === id);
                if (!booking || !booking.pendingPriceUpdate) return;
                
                const currentPrice = booking.price;
                const additionalAmount = booking.pendingPriceUpdate;
                const newTotal = currentPrice + additionalAmount;
                
                document.getElementById('priceConfirmService').textContent = booking.serviceType || 'Service';
                document.getElementById('priceConfirmOriginal').textContent = currentPrice;
                document.getElementById('priceConfirmAdditional').textContent = additionalAmount;
                document.getElementById('priceConfirmNewTotal').textContent = newTotal;
                document.getElementById('priceConfirmComment').textContent = booking.smeComment || 'No comment';
                document.getElementById('customerResponseToSME').value = '';
                
                pendingPriceUpdate = booking;
                priceConfirmModal.classList.remove('hide');
            });
        });

        document.querySelectorAll('.confirm-customer-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const booking = state.bookings.find(b => b.id === id);
                if (!booking) return;
                if (booking.customerConfirmed) {
                    alert('Already confirmed.');
                    return;
                }
                booking.customerConfirmed = true;
                if (booking.smeConfirmed) {
                    completeBooking(booking);
                } else {
                    alert('You marked as done. Waiting for SME confirmation.');
                    updateUI();
                }
            });
        });
    }

    // ----- RENDER SME REQUESTS -----
    function renderSmeRequests() {
        const requests = state.bookings.filter(b =>
            (b.status === 'pending' || b.status === 'escrow' || b.status === 'confirmed') && !b.smeRefused
        );

        if (requests.length === 0) {
            smeRequestsEl.innerHTML = `<p class="text-muted">No pending requests.</p>`;
            return;
        }

        smeRequestsEl.innerHTML = requests.map(b => {
            let actions = '';
            const elapsed = (Date.now() - b.createdAt) / 60000;
            let timerHtml = '';
            let canRespond = true;

            if (b.status === 'pending' || b.status === 'escrow' || b.status === 'confirmed') {
                const canRefuse = elapsed < 15 && !b.smeConfirmed && !b.customerConfirmed && !b.smeRefused;
                if (canRefuse) {
                    const remaining = Math.ceil(15 - elapsed);
                    timerHtml = `<span class="countdown-timer"><i class="fas fa-clock"></i> ${remaining}m to respond</span>`;
                } else if (elapsed >= 15 && !b.smeConfirmed && !b.customerConfirmed) {
                    timerHtml = `<span class="text-muted">Response window closed</span>`;
                    canRespond = false;
                }
            }

            const hasPendingPriceUpdate = b.pendingPriceUpdate && !b.priceUpdateAccepted && !b.priceUpdateRejected;

            if (b.status === 'pending' && canRespond) {
                actions = `
                    <button class="btn btn-sm btn-success accept-sme-btn" data-id="${b.id}" style="margin-right:4px;">
                        Accept
                    </button>
                    <button class="btn btn-sm btn-info respond-sme-btn" data-id="${b.id}" style="margin-right:4px;">
                        <i class="fas fa-reply"></i> Respond
                    </button>
                    ${elapsed < 15 ? `<button class="btn btn-sm btn-danger refuse-sme-btn" data-id="${b.id}">
                        <i class="fas fa-times"></i> Decline
                    </button>` : ''}
                `;
            } else if (b.status === 'confirmed' && b.customerConfirmed && !b.smeConfirmed) {
                actions = `
                    <button class="btn btn-sm btn-warning confirm-sme-btn" data-id="${b.id}">
                        Confirm Completion
                    </button>
                `;
            } else if (b.status === 'confirmed' && !b.customerConfirmed) {
                actions = `<span class="status-badge status-pending">Awaiting customer</span>`;
            } else if (b.status === 'escrow' && b.customerConfirmed && !b.smeConfirmed) {
                actions = `
                    <button class="btn btn-sm btn-warning confirm-sme-btn" data-id="${b.id}">
                        Confirm Completion
                    </button>
                `;
            } else if (b.status === 'escrow' && !b.customerConfirmed && canRespond) {
                actions = `
                    <button class="btn btn-sm btn-info respond-sme-btn" data-id="${b.id}">
                        <i class="fas fa-reply"></i> Respond
                    </button>
                    ${elapsed < 15 ? `<button class="btn btn-sm btn-danger refuse-sme-btn" data-id="${b.id}">
                        <i class="fas fa-times"></i> Decline
                    </button>` : ''}
                `;
            } else if (b.status === 'escrow' && !b.customerConfirmed && !canRespond) {
                actions = `<span class="status-badge status-pending">Awaiting customer</span>`;
            }

            let statusLabel = b.status;
            if (b.status === 'pending') statusLabel = 'Pending';
            else if (b.status === 'confirmed') statusLabel = 'Confirmed';
            else if (b.status === 'escrow') statusLabel = 'In Escrow';

            return `
                <div class="transaction-item">
                    <div class="item-details">
                        <strong>${b.providerName}</strong> · P${b.price} 
                        <span class="status-badge status-escrow">${statusLabel}</span>
                        ${timerHtml}
                        ${b.serviceType ? `<div class="text-muted" style="font-size:0.8rem;">Service: ${b.serviceType}</div>` : ''}
                        ${b.urgency ? `<div class="text-muted" style="font-size:0.8rem;">Urgency: ${b.urgency}</div>` : ''}
                        ${b.priceVaries ? `<div class="text-muted" style="font-size:0.8rem;color:#b02a37;">Note: Price may vary</div>` : ''}
                        ${hasPendingPriceUpdate ? `<div class="text-muted" style="font-size:0.8rem;color:#0d6efd;">Price update pending customer approval</div>` : ''}
                        ${b.smeComment ? `<div class="text-muted" style="font-size:0.85rem;background:#f8f9fa;padding:4px 8px;border-radius:6px;margin-top:4px;">Your comment: ${b.smeComment}</div>` : ''}
                        ${b.customerResponse ? `<div class="text-muted" style="font-size:0.85rem;background:#e8f4fd;padding:4px 8px;border-radius:6px;margin-top:4px;">Customer: ${b.customerResponse}</div>` : ''}
                        ${b.cancellationReason ? `<div class="cancellation-reason">${b.cancellationReason}</div>` : ''}
                        <div class="text-muted" style="font-size:0.8rem;">
                            Location: ${b.address || 'Not specified'} · Time: ${b.dateTime || b.preferredTime || 'Not specified'}
                        </div>
                        ${b.details ? `<div class="text-muted" style="font-size:0.8rem;">Details: ${b.details}</div>` : ''}
                        ${b.notes ? `<div class="text-muted" style="font-size:0.8rem;">Notes: ${b.notes}</div>` : ''}
                        ${b.photoData ? `<img src="${b.photoData}" style="max-width:80px;max-height:60px;border-radius:4px;margin-top:4px;">` : ''}
                    </div>
                    <span>${actions}</span>
                </div>
            `;
        }).join('');

        document.querySelectorAll('.accept-sme-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const booking = state.bookings.find(b => b.id === id);
                if (!booking) return;
                
                document.getElementById('acceptService').textContent = booking.serviceType || 'Service';
                document.getElementById('acceptPrice').textContent = booking.price;
                document.getElementById('smeAcceptComment').value = '';
                currentBookingActionId = id;
                smeAcceptModal.classList.remove('hide');
            });
        });

        document.getElementById('confirmSmeAccept').addEventListener('click', function() {
            const id = currentBookingActionId;
            const booking = state.bookings.find(b => b.id === id);
            if (!booking) return;

            booking.status = 'confirmed';
            booking.smeConfirmed = true;
            booking.smeAccepted = true;
            const comment = document.getElementById('smeAcceptComment').value.trim();
            if (comment) {
                booking.smeComment = comment;
            }
            
            smeAcceptModal.classList.add('hide');
            alert(`Booking accepted. Customer has been notified.`);
            updateUI();
        });

        document.getElementById('closeSmeAccept').addEventListener('click', function() {
            smeAcceptModal.classList.add('hide');
        });

        document.getElementById('cancelSmeAccept').addEventListener('click', function() {
            smeAcceptModal.classList.add('hide');
        });

        smeAcceptModal.addEventListener('click', function(e) {
            if (e.target === smeAcceptModal) {
                smeAcceptModal.classList.add('hide');
            }
        });

        document.querySelectorAll('.confirm-sme-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const booking = state.bookings.find(b => b.id === id);
                if (!booking) return;
                if (booking.smeConfirmed) {
                    alert('Already confirmed.');
                    return;
                }
                booking.smeConfirmed = true;
                if (booking.customerConfirmed) {
                    completeBooking(booking);
                } else {
                    alert('SME confirmed. Waiting for customer to mark done.');
                    updateUI();
                }
            });
        });

        document.querySelectorAll('.respond-sme-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const booking = state.bookings.find(b => b.id === id);
                if (!booking) return;
                
                currentBookingActionId = id;
                currentSmeAction = 'respond';
                document.getElementById('smeActionTitle').textContent = `Respond to ${booking.providerName}`;
                document.getElementById('smeComment').value = booking.smeComment || '';
                document.getElementById('smeSuggestedPrice').value = '';
                document.getElementById('smeRefuseBtn').style.display = 'inline-block';
                smeActionModal.classList.remove('hide');
            });
        });

        document.querySelectorAll('.refuse-sme-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const booking = state.bookings.find(b => b.id === id);
                if (!booking) return;
                
                currentBookingActionId = id;
                currentSmeAction = 'refuse';
                document.getElementById('smeActionTitle').textContent = `Decline booking from ${booking.providerName}`;
                document.getElementById('smeComment').value = '';
                document.getElementById('smeSuggestedPrice').value = '';
                document.getElementById('smeRefuseBtn').style.display = 'none';
                smeActionModal.classList.remove('hide');
            });
        });
    }

    // ----- SME ACTION MODAL EVENTS -----
    document.getElementById('closeSmeAction').addEventListener('click', function() {
        smeActionModal.classList.add('hide');
    });

    document.getElementById('cancelSmeAction').addEventListener('click', function() {
        smeActionModal.classList.add('hide');
    });

    smeActionModal.addEventListener('click', function(e) {
        if (e.target === smeActionModal) {
            smeActionModal.classList.add('hide');
        }
    });

    document.getElementById('smeRefuseBtn').addEventListener('click', function() {
        const id = currentBookingActionId;
        const booking = state.bookings.find(b => b.id === id);
        if (!booking) return;

        const comment = document.getElementById('smeComment').value.trim() || 'No reason provided';
        
        booking.status = 'refused';
        booking.smeRefused = true;
        booking.cancellationReason = `SME declined: ${comment}`;
        booking.smeComment = comment;
        state.customerWallet += booking.price;
        
        smeActionModal.classList.add('hide');
        alert(`Service declined. Reason: ${comment}\n\nP${booking.price} refunded to customer.`);
        updateUI();
    });

    document.getElementById('smeRespondBtn').addEventListener('click', function() {
        const id = currentBookingActionId;
        const booking = state.bookings.find(b => b.id === id);
        if (!booking) return;

        const comment = document.getElementById('smeComment').value.trim();
        const additionalPrice = document.getElementById('smeSuggestedPrice').value.trim();
        
        if (comment) {
            booking.smeComment = comment;
        }
        
        if (additionalPrice) {
            const additionalAmount = parseInt(additionalPrice);
            if (isNaN(additionalAmount) || additionalAmount <= 0) {
                alert('Please enter a valid additional amount.');
                return;
            }
            
            booking.pendingPriceUpdate = additionalAmount;
            booking.priceUpdateAccepted = false;
            booking.priceUpdateRejected = false;
            
            smeActionModal.classList.add('hide');
            alert(`Additional price sent to customer: P${additionalAmount}\n\nNew total would be: P${booking.price + additionalAmount}\n\nWaiting for customer approval.`);
        } else {
            smeActionModal.classList.add('hide');
            if (comment) {
                alert('Comment sent to customer.');
            } else {
                alert('No changes made.');
            }
        }
        updateUI();
    });

    // ----- PRICE CONFIRMATION MODAL EVENTS -----
    document.getElementById('closePriceConfirm').addEventListener('click', function() {
        priceConfirmModal.classList.add('hide');
        pendingPriceUpdate = null;
    });

    priceConfirmModal.addEventListener('click', function(e) {
        if (e.target === priceConfirmModal) {
            priceConfirmModal.classList.add('hide');
            pendingPriceUpdate = null;
        }
    });

    document.getElementById('priceAccept').addEventListener('click', function() {
        if (!pendingPriceUpdate) return;
        
        const booking = pendingPriceUpdate;
        const additionalAmount = booking.pendingPriceUpdate;
        const currentPrice = booking.price;
        const newPrice = currentPrice + additionalAmount;
        
        if (state.customerWallet < additionalAmount) {
            alert(`Insufficient balance for the additional amount. You need P${additionalAmount} more.`);
            return;
        }
        
        state.customerWallet -= additionalAmount;
        booking.price = newPrice;
        booking.priceUpdateAccepted = true;
        booking.pendingPriceUpdate = null;
        
        const response = document.getElementById('customerResponseToSME').value.trim();
        if (response) {
            booking.customerResponse = response;
        }
        
        priceConfirmModal.classList.add('hide');
        pendingPriceUpdate = null;
        alert(`Price updated! New total: P${newPrice} (P${currentPrice} + P${additionalAmount} additional).`);
        updateUI();
    });

    document.getElementById('priceReject').addEventListener('click', function() {
        if (!pendingPriceUpdate) return;
        
        const booking = pendingPriceUpdate;
        const response = document.getElementById('customerResponseToSME').value.trim();
        
        booking.priceUpdateRejected = true;
        booking.pendingPriceUpdate = null;
        
        if (response) {
            booking.customerResponse = response;
        }
        
        priceConfirmModal.classList.add('hide');
        pendingPriceUpdate = null;
        alert(`Price update rejected. Original price remains: P${booking.price}.\n\nYour response has been sent to the SME.`);
        updateUI();
    });

    document.getElementById('priceRejectAndCancel').addEventListener('click', function() {
        if (!pendingPriceUpdate) return;
        
        const booking = pendingPriceUpdate;
        const response = document.getElementById('customerResponseToSME').value.trim() || 'Price too high, cancelling booking';
        
        booking.status = 'cancelled';
        booking.cancellationReason = `Customer cancelled after price update: ${response}`;
        booking.customerResponse = response;
        booking.priceUpdateRejected = true;
        booking.pendingPriceUpdate = null;
        
        state.customerWallet += booking.price;
        
        priceConfirmModal.classList.add('hide');
        pendingPriceUpdate = null;
        alert(`Booking cancelled. Reason: ${response}\n\nP${booking.price} refunded to your wallet.`);
        updateUI();
    });

    // ----- RENDER SME COMPLETED -----
    function renderSmeCompleted() {
        const completed = state.completedJobs;
        if (completed.length === 0) {
            smeCompletedEl.innerHTML = `<p class="text-muted">No completed jobs yet.</p>`;
            return;
        }

        smeCompletedEl.innerHTML = completed.map(j => `
            <div class="transaction-item">
                <div class="item-details">
                    <strong>${j.providerName}</strong> · P${j.price}
                    <span class="status-badge status-completed">Completed</span>
                    ${j.serviceType ? `<div class="text-muted" style="font-size:0.8rem;">Service: ${j.serviceType}</div>` : ''}
                    ${j.smeComment ? `<div class="text-muted" style="font-size:0.85rem;background:#f8f9fa;padding:4px 8px;border-radius:6px;margin-top:4px;">${j.smeComment}</div>` : ''}
                    ${j.customerResponse ? `<div class="text-muted" style="font-size:0.85rem;background:#e8f4fd;padding:4px 8px;border-radius:6px;margin-top:4px;">Customer: ${j.customerResponse}</div>` : ''}
                    ${j.customerReview ? `
                        <div class="text-muted" style="font-size:0.85rem;">
                            Rating: ${'★'.repeat(Math.round(j.customerReview.rating))} ${j.customerReview.comment}
                        </div>
                    ` : ''}
                </div>
                <div>
                    <span>Earned P${j.smeShare} <span class="badge-commission">+5% fee</span></span>
                    ${!j.smeReviewedCustomer ? `
                        <button class="btn btn-sm btn-info review-customer-btn" data-id="${j.id}">
                            <i class="fas fa-star"></i> Review Customer
                        </button>
                    ` : '<span class="text-muted">Reviewed</span>'}
                </div>
            </div>
        `).join('');

        document.querySelectorAll('.review-customer-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const job = state.completedJobs.find(j => j.id === id);
                if (!job) return;
                job.smeReviewedCustomer = true;
                alert('Customer reviewed!');
                updateUI();
            });
        });
    }

    // ----- COMPLETE BOOKING -----
    function completeBooking(booking) {
        if (booking.status === 'completed') return;

        const amount = booking.price;
        const smeShare = Math.floor(amount * 0.95);
        const platformShare = amount - smeShare;

        state.smeWallet += smeShare;
        state.smeTotalEarnings += smeShare;
        state.smeJobsCompleted += 1;
        booking.status = 'completed';

        const completedJob = {
            ...booking,
            smeShare,
            platformShare,
            customerReview: null,
            smeReviewedCustomer: false
        };
        state.completedJobs.push(completedJob);
        state.customerTotalBookings += 1;
        state.customerTotalSpent += amount;

        updateUI();

        setTimeout(() => {
            if (confirm(`Service completed! P${smeShare} transferred to SME (95%). Platform fee: P${platformShare} (5%).\n\nWould you like to review ${booking.providerName}?`)) {
                state.currentReviewBookingId = booking.id;
                reviewProviderName.textContent = booking.providerName;
                reviewModal.classList.remove('hide');
            }
        }, 300);
    }

    // ----- CATEGORY FILTERS -----
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            state.currentCategory = this.dataset.category;
            renderProviders();
        });
    });

    // ----- ANALYTICS NAVIGATION -----
    const analyticsCustomerBtn = document.getElementById('analyticsCustomerBtn');
    const analyticsSmeBtn = document.getElementById('analyticsSmeBtn');
    const customerAnalyticsView = document.getElementById('customerAnalyticsView');
    const smeAnalyticsView = document.getElementById('smeAnalyticsView');

    if (analyticsCustomerBtn && analyticsSmeBtn) {
        analyticsCustomerBtn.addEventListener('click', function() {
            customerAnalyticsView.classList.remove('hide');
            smeAnalyticsView.classList.add('hide');
            this.classList.add('active');
            this.classList.remove('btn-outline');
            analyticsSmeBtn.classList.remove('active');
            analyticsSmeBtn.classList.add('btn-outline');
            updateCustomerAnalytics();
        });

        analyticsSmeBtn.addEventListener('click', function() {
            smeAnalyticsView.classList.remove('hide');
            customerAnalyticsView.classList.add('hide');
            this.classList.add('active');
            this.classList.remove('btn-outline');
            analyticsCustomerBtn.classList.remove('active');
            analyticsCustomerBtn.classList.add('btn-outline');
            updateSmeAnalytics();
        });
    }

    // ----- DEPOSIT -----
    depositBtn.addEventListener('click', () => depositModal.classList.remove('hide'));
    closeDepositModal.addEventListener('click', () => depositModal.classList.add('hide'));
    cancelDeposit.addEventListener('click', () => depositModal.classList.add('hide'));
    depositModal.addEventListener('click', (e) => {
        if (e.target === depositModal) depositModal.classList.add('hide');
    });

    confirmDeposit.addEventListener('click', function() {
        const amount = parseInt(depositAmount.value);
        if (isNaN(amount) || amount < 10) {
            alert('Please enter a valid amount (min P10).');
            return;
        }
        const method = depositMethod.options[depositMethod.selectedIndex].text;
        state.customerWallet += amount;
        depositModal.classList.add('hide');
        updateUI();
        alert(`P${amount} deposited via ${method}. New balance: P${state.customerWallet}`);
    });

    // ----- BOOKING -----
    closeBookingModal.addEventListener('click', () => bookingModal.classList.add('hide'));
    cancelBookingModal.addEventListener('click', () => bookingModal.classList.add('hide'));
    bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) bookingModal.classList.add('hide');
    });

    photoUploadTrigger.addEventListener('click', () => photoUpload.click());
    photoUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                currentPhotoData = event.target.result;
                photoPreviewContainer.innerHTML =
                    `<img src="${event.target.result}" class="photo-preview">`;
            };
            reader.readAsDataURL(file);
        }
    });

    bookingServiceType.addEventListener('change', function() {
        const selected = this.options[this.selectedIndex];
        if (selected && selected.value) {
            const price = parseInt(selected.dataset.price);
            const variable = selected.dataset.variable === 'true';
            const description = selected.dataset.description || '';
            
            selectedServiceData = {
                name: selected.value,
                price: price,
                variable: variable,
                description: description
            };
            
            let priceInfo = `Price: P${price}`;
            if (variable) {
                priceInfo += ` (Starting price - SME will confirm final price)`;
            }
            document.querySelector('.price-info')?.remove();
            const infoDiv = document.createElement('div');
            infoDiv.className = 'price-info text-muted';
            infoDiv.style.cssText = 'margin: -0.5rem 0 0.5rem 0; font-size: 0.9rem; padding: 0.5rem; background: #f8f9fa; border-radius: 8px;';
            infoDiv.innerHTML = `
                <div>${priceInfo}</div>
                ${variable ? '<div style="color:#b02a37;margin-top:4px;">Note: The SME will contact you to confirm the final price based on your requirements.</div>' : ''}
                <div style="font-size:0.8rem;margin-top:4px;">${description}</div>
            `;
            bookingServiceType.parentNode.insertBefore(infoDiv, bookingServiceType.nextSibling);
        } else {
            document.querySelector('.price-info')?.remove();
            selectedServiceData = null;
        }
    });

    confirmBooking.addEventListener('click', function() {
        if (!currentBookingProvider) return;
        if (!selectedServiceData) {
            alert('Please select a service type.');
            return;
        }
        
        const price = selectedServiceData.price;
        if (state.customerWallet < price) {
            alert(`Insufficient balance. You need at least P${price}.`);
            return;
        }

        const urgencyMap = {
            'normal': 'Normal (1-3 days)',
            'urgent': 'Urgent (Today/Tomorrow)',
            'emergency': 'Emergency (Within 2 hours)'
        };
        const urgency = bookingUrgency.value;
        let finalPrice = price;
        if (urgency === 'emergency') {
            finalPrice += 100;
        }

        if (state.customerWallet < finalPrice) {
            alert(`Insufficient balance for emergency service. You need P${finalPrice}.`);
            return;
        }

        const booking = {
            id: state.nextId++,
            providerId: currentBookingProvider.id,
            providerName: currentBookingProvider.name,
            price: finalPrice,
            status: 'pending',
            customerConfirmed: false,
            smeConfirmed: false,
            smeAccepted: false,
            smeRefused: false,
            createdAt: Date.now(),
            serviceType: selectedServiceData.name,
            priceVaries: selectedServiceData.variable,
            address: bookingAddress.value || 'Not specified',
            dateTime: bookingDateTime.value || 'Not specified',
            urgency: urgencyMap[urgency] || 'Normal',
            details: bookingDetails.value || 'No details',
            notes: bookingNotes.value || '',
            photoData: currentPhotoData || null,
            cancellationReason: null,
            smeComment: null,
            customerResponse: null,
            pendingPriceUpdate: null,
            originalPrice: null,
            priceUpdateAccepted: false,
            priceUpdateRejected: false
        };

        state.customerWallet -= finalPrice;
        state.bookings.push(booking);
        bookingModal.classList.add('hide');
        currentPhotoData = null;
        photoPreviewContainer.innerHTML = '';
        bookingServiceType.value = '';
        bookingDetails.value = '';
        bookingNotes.value = '';
        document.querySelector('.price-info')?.remove();
        selectedServiceData = null;
        updateUI();
        
        let message = `Booking with ${currentBookingProvider.name} (P${finalPrice}) created.\nService: ${selectedServiceData.name}\nMoney held in escrow.\n\nWaiting for SME to accept the booking.`;
        if (selectedServiceData.variable) {
            message += `\n\nNote: This is a starting price. The SME will contact you to confirm the final price based on your requirements.`;
        }
        if (urgency === 'emergency') {
            message += `\n\nEmergency service selected. Additional P100 added for priority response.`;
        }
        alert(message);
    });

    // ----- CANCEL / REFUSE -----
    closeCancelReason.addEventListener('click', function(e) {
        e.preventDefault();
        cancelReasonModal.classList.add('hide');
        cancelReason.value = '';
        state.currentCancelBookingId = null;
    });

    cancelCancel.addEventListener('click', function(e) {
        e.preventDefault();
        cancelReasonModal.classList.add('hide');
        cancelReason.value = '';
        state.currentCancelBookingId = null;
    });

    cancelReasonModal.addEventListener('click', function(e) {
        if (e.target === cancelReasonModal) {
            cancelReasonModal.classList.add('hide');
            cancelReason.value = '';
            state.currentCancelBookingId = null;
        }
    });

    confirmCancelBooking.addEventListener('click', function() {
        const id = state.currentCancelBookingId;
        const booking = state.bookings.find(b => b.id === id);
        if (!booking) {
            alert('Booking not found.');
            cancelReasonModal.classList.add('hide');
            return;
        }

        const reason = cancelReason.value.trim() || 'No reason provided';
        const mode = this.dataset.mode || 'cancel';

        if (mode === 'refuse') {
            booking.status = 'refused';
            booking.smeRefused = true;
            booking.cancellationReason = `SME declined: ${reason}`;
            state.customerWallet += booking.price;
            alert(`Service declined. Reason: ${reason}\n\nP${booking.price} refunded to your wallet.`);
        } else {
            const elapsed = (Date.now() - booking.createdAt) / 60000;
            if (elapsed > 10) {
                alert('Cancellation window has expired (10 minutes).');
                cancelReasonModal.classList.add('hide');
                return;
            }
            booking.status = 'cancelled';
            booking.cancellationReason = `Cancelled by customer: ${reason}`;
            state.customerWallet += booking.price;
            alert(`Booking cancelled. Reason: ${reason}\n\nP${booking.price} refunded to your wallet.`);
        }

        cancelReasonModal.classList.add('hide');
        cancelReason.value = '';
        state.currentCancelBookingId = null;
        this.dataset.mode = 'cancel';
        updateUI();
    });

    // ----- REVIEW -----
    closeReviewModal.addEventListener('click', () => reviewModal.classList.add('hide'));
    cancelReview.addEventListener('click', () => reviewModal.classList.add('hide'));
    reviewModal.addEventListener('click', (e) => {
        if (e.target === reviewModal) reviewModal.classList.add('hide');
    });

    reviewStars.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', function() {
            const value = parseInt(this.dataset.value);
            state.currentReviewRating = value;
            reviewStars.querySelectorAll('.star').forEach(s => {
                s.textContent = parseInt(s.dataset.value) <= value ? '★' : '☆';
            });
        });
        star.addEventListener('mouseenter', function() {
            const value = parseInt(this.dataset.value);
            reviewStars.querySelectorAll('.star').forEach(s => {
                s.textContent = parseInt(s.dataset.value) <= value ? '★' : '☆';
            });
        });
        star.addEventListener('mouseleave', function() {
            const rating = state.currentReviewRating;
            reviewStars.querySelectorAll('.star').forEach(s => {
                s.textContent = parseInt(s.dataset.value) <= rating ? '★' : '☆';
            });
        });
    });

    submitReview.addEventListener('click', function() {
        if (state.currentReviewRating === 0) {
            alert('Please select a rating.');
            return;
        }
        const comment = reviewComment.value.trim() || 'No comment';
        const bookingId = state.currentReviewBookingId;
        const booking = state.bookings.find(b => b.id === bookingId);
        if (!booking) {
            alert('Booking not found.');
            return;
        }

        state.reviews.push({
            providerId: booking.providerId,
            customerName: 'Demo Customer',
            rating: state.currentReviewRating,
            comment: comment,
            bookingId: bookingId
        });

        state.customerReviewsGiven += 1;
        state.smeRatings.push(state.currentReviewRating);

        const job = state.completedJobs.find(j => j.id === bookingId);
        if (job) {
            job.customerReview = { rating: state.currentReviewRating, comment: comment };
        }

        reviewModal.classList.add('hide');
        state.currentReviewRating = 0;
        reviewComment.value = '';
        reviewStars.querySelectorAll('.star').forEach(s => s.textContent = '☆');
        alert('Thank you for your review!');
        updateUI();
    });

    // ----- CLOSE PROVIDER DETAIL -----
    closeProviderDetail.addEventListener('click', function(e) {
        e.preventDefault();
        providerDetailModal.classList.add('hide');
    });

    providerDetailModal.addEventListener('click', function(e) {
        if (e.target === providerDetailModal) {
            providerDetailModal.classList.add('hide');
        }
    });

    // ----- SEARCH -----
    function doSearch() { renderProviders(); }
    searchBtn.addEventListener('click', doSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') doSearch();
    });

    // ----- NAV -----
    const navLinks = document.querySelectorAll('.nav-links a[data-page]');
    const panels = {
        customer: document.getElementById('customerPanel'),
        sme: document.getElementById('smePanel'),
        analytics: document.getElementById('analyticsPanel')
    };

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            Object.values(panels).forEach(p => p.classList.add('hide'));
            if (panels[page]) panels[page].classList.remove('hide');
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show correct analytics view based on current user
            if (page === 'analytics') {
                if (document.getElementById('customerAnalyticsView').classList.contains('hide')) {
                    // SME analytics is shown, update it
                    updateSmeAnalytics();
                } else {
                    updateCustomerAnalytics();
                }
            }
            updateUI();
        });
    });

    // ----- PRE-POPULATE DEMO -----
    setTimeout(() => {
        if (state.bookings.length === 0) {
            const demo = {
                id: state.nextId++,
                providerId: 'p2',
                providerName: 'Sweet Cakes BW',
                price: 200,
                status: 'pending',
                customerConfirmed: false,
                smeConfirmed: false,
                smeAccepted: false,
                smeRefused: false,
                createdAt: Date.now() - 120000,
                serviceType: 'Birthday cake',
                priceVaries: true,
                address: 'Gaborone CBD, Plot 456',
                dateTime: new Date(Date.now() + 86400000).toISOString().slice(0, 16),
                urgency: 'Normal',
                details: 'Vanilla cake with chocolate frosting, 2-tier, for 20 people',
                notes: 'Please include birthday candles',
                photoData: null,
                cancellationReason: null,
                smeComment: null,
                customerResponse: null,
                pendingPriceUpdate: null,
                originalPrice: null,
                priceUpdateAccepted: false,
                priceUpdateRejected: false
            };
            state.customerWallet -= 200;
            state.bookings.push(demo);
            updateUI();
        }
    }, 150);

    // Initial render
    updateUI();
})();